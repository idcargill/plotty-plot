import { pointSettings } from '../map/mapSettings.js';
import { myMap, overlayMaps } from '../map/mapSetup.js';
// Load points from local Stoarage

const loadLocalStorage = () => {
	const myPoints = localStorage.getItem('myPoints');

	if (myPoints) {
		const parsedPoints = JSON.parse(myPoints);
		console.log(parsedPoints);

		for (let point in parsedPoints) {
			const title = parsedPoints[point].Title;
			const lat = parseFloat(parsedPoints[point].lat);
			const lon = parseFloat(parsedPoints[point].lon);

			const mapPoint = L.circle([lat, lon], pointSettings);
			mapPoint.bindPopup(title);
			let newLayer = L.layerGroup([mapPoint]);
			overlayMaps.myPoints.addLayer(newLayer);
		}
	}
};

export default loadLocalStorage;
