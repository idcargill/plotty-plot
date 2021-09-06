// Load points from local Stoarage
// Points loaded on page load.
import { pointSettings } from '../map/mapSettings.js';
import { overlayMaps } from '../map/mapSetup.js';

const loadFromLocalStorage = () => {
	const myPoints = localStorage.getItem('myPoints');

	if (myPoints) {
		const parsedPoints = JSON.parse(myPoints);

		// Array of objects in storage
		if (Array.isArray(parsedPoints)) {
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

			// Single Object in storage
		} else if (!Array.isArray(parsedPoints)) {
			console.log(parsedPoints);
			let title = parsedPoints.Title;
			let lat = parsedPoints.lat;
			let lon = parsedPoints.lon;
			// Add stored points to myPoints map layer
			// eslint-disable-next-line no-undef
			const mapPoint = L.circle([lat, lon], pointSettings);
			mapPoint.bindPopup(title);

			// eslint-disable-next-line no-undef
			let newLayer = L.layerGroup([mapPoint]);
			overlayMaps.myPoints.addLayer(newLayer);
		}
		// Nothing in Storage
	} else {
		console.log('local storage is empty');
	}
};

export default loadFromLocalStorage;
