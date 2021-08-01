import { toLocalStorage } from './helpers.js';
import { circleSettings } from './mapSettings.js';
import { myMap } from './index.js';
const form = document.querySelector('.coordinate-form');

function addCoordinatePoint() {
	const title = form.title.value;
	const lat = parseFloat(form.lat.value);
	const lon = parseFloat(form.lon.value);
	const result = { Title: title, lat: lat, lon: lon };
	toLocalStorage(result);
	console.log(`new data point: ${result.title} ${lat}, ${lon}`);
	const circle = L.circle([lat, lon], circleSettings).addTo(myMap);
	form.reset();
}

export default addCoordinatePoint;
