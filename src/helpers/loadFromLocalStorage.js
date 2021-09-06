// Load points from local Stoarage
// Points loaded on page load.
import { pointSettings } from '../map/mapSettings.js';
import { overlayMaps } from '../map/mapSetup.js';

const loadFromLocalStorage = () => {
	const myPoints = localStorage.getItem('myPoints');

	if (myPoints) {
		const parsedPoints = JSON.parse(myPoints);
		console.log(parsedPoints);

		parsedPoints.forEach((i) => {
			let title = i.Title;
			let lat = i.lat;
			let lon = i.lon;

			// Add stored points to myPoints map layer
			// eslint-disable-next-line no-undef
			const mapPoint = L.circle([lat, lon], pointSettings);
			mapPoint.bindPopup(title);
			// eslint-disable-next-line no-undef
			let newLayer = L.layerGroup([mapPoint]);
			overlayMaps.myPoints.addLayer(newLayer);
		});
	} else {
		console.log('local storage is empty');
	}
};

export default loadFromLocalStorage;
