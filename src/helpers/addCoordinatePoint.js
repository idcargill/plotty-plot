import toLocalStorage from './toLocalStorage.js';
import { circleSettings, pointSettings } from '../mapSettings.js';
import { myMap } from '../index.js';
const form = document.querySelector('.coordinate-form');

function addCoordinatePoint() {
	const title = form.coordTitle.value;
	const lat = parseFloat(form.lat.value);
	const lon = parseFloat(form.lon.value);
	const result = { Title: title, lat: lat, lon: lon };

	// send point to local storage
	toLocalStorage(result);
	console.log(`new data point: ${result.Title} ${lat}, ${lon}`);

	// Add point to map
	const circle = L.circle([lat, lon], pointSettings).addTo(myMap);
	circle.bindPopup(title);

	// add featureGroup layer
	form.reset();
}

export { addCoordinatePoint };
