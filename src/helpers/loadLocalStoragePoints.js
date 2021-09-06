// Load points from local Stoarage
// Points loaded on page load.
import { pointSettings } from '../map/mapSettings.js';
import { overlayMaps } from '../map/mapSetup.js';

const loadLocalStoragePoints = () => {
	const myPoints = localStorage.getItem('myPoints');

	if (myPoints) {
		const parsedPoints = JSON.parse(myPoints);
		console.log(parsedPoints);

		parsedPoints.forEach((point) => {
			const title = point.Title;
			const lat = point.lat;
			const lon = point.lon;

			const mapPoint = L.circle([lat, lon], pointSettings);
			mapPoint.bindPopup(title);
			let newLayer = L.layerGroup([mapPoint]);
			overlayMaps.myPoints.addLayer(newLayer);
		});
	} else {
		console.log('local storage is empty');
	}
};

export default loadLocalStoragePoints;
