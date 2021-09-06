import { circleSettings } from '../map/mapSettings.js';
import { myMap, overlayMaps } from '../map/mapSetup.js';

function findLatLong(row) {
	const latRegex = /^(lat)|(latitude)/i;
	const lonRegex = /^(lon)|(longitude)/i;

	let latIndex = '';
	let longIndex = '';

	Object.keys(row).forEach((name) => {
		if (latRegex.test(name)) {
			latIndex = name;
		}

		if (lonRegex.test(name)) {
			longIndex = name;
		}
	});
	return { lat: latIndex, lon: longIndex };
}

// Read uploaded file
function readUpload(fileLoaded) {
	if (myMap.fileControl) {
		myMap.removeControl(myMap.fileControl);
	}
	const groupArr = [];
	let reader = new FileReader();
	reader.onload = (x) => {
		const data = JSON.parse(x.target.result);

		// Find Lat/lon indexes in uploaded file
		const dataArr = Object.values(data);
		const coordIndexLookup = findLatLong(data[0]);

		// Add Points to map uisng the lat/long Regex tested values
		// array of Objects
		dataArr.forEach((i) => {
			const latitude = i[coordIndexLookup.lat];
			const longitude = i[coordIndexLookup.lon];

			// eslint-disable-next-line no-undef
			const circle = L.circle([latitude, longitude], circleSettings);
			// Popup text from JSON file data
			circle.bindPopup(JSON.stringify(i));
			groupArr.push(circle);
		});
		// Add Group to map
		// eslint-disable-next-line no-undef
		const newLayer = L.layerGroup(groupArr);
		overlayMaps.myPoints.addLayer(newLayer);
	};
	reader.readAsText(fileLoaded);
}

export default readUpload;
