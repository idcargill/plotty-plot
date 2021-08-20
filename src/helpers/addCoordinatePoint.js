import toLocalStorage from './toLocalStorage.js';
import { pointSettings } from '../map/mapSettings.js';
import { myMap, overlayMaps } from '../map/mapSetup.js';
const form = document.querySelector('.coordinate-form');

function addCoordinatePoint() {
	const title = form.coordTitle.value;
	const lat = parseFloat(form.lat.value);
	const lon = parseFloat(form.lon.value);
	const result = { Title: title, lat: lat, lon: lon };

	// send point to local storage
	toLocalStorage(result);

	// Add point to map
	const point = L.circle([lat, lon], pointSettings);
	point.bindPopup(title);

	// add featureGroup layer
	// const pointArr = [];
	// pointArr.push(point);

	let newLayer = L.layerGroup([point]);
	overlayMaps.myPoints.addLayer(newLayer);

	// Fly Map
	myMap.flyTo([lat, lon]);

	// Log
	console.log(`new data point: ${result.Title} ${lat}, ${lon}`);

	// Clear Form
	form.reset();
}

export { addCoordinatePoint };
