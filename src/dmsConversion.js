import { toLocalStorage } from './helpers.js';
import { circleSettings } from './mapSettings.js';
import { myMap } from './index.js';
const form = document.querySelector('#dms-form');

// function dmsConversion() {
//   form.addEventListener('submit', (ev) => {
//     ev.preventDefault();
//     const title = ev.target.title.value;
//     const lonDeg = +ev.target.lonDeg.value;
//     const lonMin = +ev.target.lonMin.value;
//     const lonSec = +ev.target.lonSec.value;
//     const longitude = lonDeg + lonMin / 60 + lonSec / 3600;
//     const convertedLon = longitude.toFixed(6);

//     const latDeg = +ev.target.latDeg.value;
//     const latMin = +ev.target.latMin.value;
//     const latSec = +ev.target.latSec.value;
//     const latitude = latDeg + latMin / 60 + latSec / 3600;
//     const convertedLat = latitude.toFixed(6);
//     console.log(convertedLat);
//     form.reset();

//     const storage = { title: title, lat: convertedLat, lon: convertedLon };
//     // takes object
//     toLocalStorage(storage);
//   });
// }

function dmsConversion() {
	const title = form.title.value;

	const latDeg = +form.latDeg.value;
	const latMin = +form.latDeg.value;
	const latSec = +form.latSec.value;

	const lonDeg = +form.lonDeg.value;
	const lonMin = +form.lonDeg.value;
	const lonSec = +form.lonSec.value;

	const latitude = latDeg + latMin / 60 + latSec / 3600;
	const longitude = lonDeg + lonMin / 60 + lonSec / 3600;

	const point = L.circle([latitude, longitude], circleSettings).addTo(myMap);
	// const circle = L.circle([51.499, -0.0899], circleSettings).addTo(myMap);

	console.log(`${title}: ${latitude.toFixed(6)} , ${longitude.toFixed(6)}`);
}

export default dmsConversion;
