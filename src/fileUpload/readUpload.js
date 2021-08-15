import { circleSettings } from '../mapSettings.js';
import { myMap } from '../mapSetup.js';

function findLatLong(row) {
	const latRegex = /^(lat)|(latitude)/i;
	const lonRegex = /^(lon)|(longitude)/i;

	let latIndex = '';
	let longIndex = '';

	Object.keys(row).forEach((name, index) => {
		if (latRegex.test(name)) {
			// console.log(`lat pass ${name} ${index}`);
			latIndex = name;
		}

		if (lonRegex.test(name)) {
			// console.log(`long Pass ${name} ${index}`);
			longIndex = name;
		}
	});
	return { lat: latIndex, lon: longIndex };
}

// Read uploaded file
function readUpload(fileLoaded) {
	let reader = new FileReader();
	reader.onload = (x) => {
		const data = JSON.parse(x.target.result);
		// console.log(data);

		// Find Lat/lon indexes in uploaded file
		const dataArr = Object.values(data);
		const coordIndexLookup = findLatLong(data[0]);

		// Add Points to map uisng the lat/long Regex tested values
		// array of Objects
		dataArr.forEach((i) => {
			const latitude = i[coordIndexLookup.lat];
			const longitude = i[coordIndexLookup.lon];

			const circle = L.circle([latitude, longitude], circleSettings).addTo(
				myMap
			);
			circle.bindPopup(JSON.stringify(i));
		});
	};
	reader.readAsText(fileLoaded);
}

export default readUpload;
