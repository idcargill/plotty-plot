// Load points from local Stoarage
// Points loaded on page load.
import { pointSettings } from '../map/mapSettings.js';
import { myMap, overlayMaps } from '../map/mapSetup.js';

const loadLocalStoragePoints = () => {
	const myPoints = localStorage.getItem('myPoints');

	if (myPoints) {
		const parsedPoints = JSON.parse(myPoints);

		for (let point in parsedPoints) {
			const title = parsedPoints[point].Title;
			const lat = parseFloat(parsedPoints[point].lat);
			const lon = parseFloat(parsedPoints[point].lon);

			const mapPoint = L.circle([lat, lon], pointSettings);
			mapPoint.bindPopup(title);
			let newLayer = L.layerGroup([mapPoint]);
			overlayMaps.myPoints.addLayer(newLayer);
		}
	} else {
		console.log('local storage is empty');
	}
};

export default loadLocalStoragePoints;
