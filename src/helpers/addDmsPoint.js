import toLocalStorage from '../helpers/toLocalStorage.js';
import { pointSettings } from '../map/mapSettings.js';
import { myMap, overlayMaps } from '../map/mapSetup.js';
const form = document.querySelector('#dms-form');

function addDmsPoint() {
	const title = form.title.value;

	// Latitude Degrees
	const latDeg = parseInt(form.latDeg.value);
	const latMin = parseFloat(form.latMin.value) / 60;
	const latSec = parseFloat(form.latSec.value) / 3600;

	console.log(`${latDeg}, ${latMin}, ${latSec}`);

	// Longitude Degrees
	const lonDeg = parseInt(form.lonDeg.value);
	const lonMin = parseFloat(form.lonMin.value) / 60;
	const lonSec = parseFloat(form.lonSec.value) / 3600;

	console.log(`${lonDeg}, ${lonMin}, ${lonSec}`);
	// Convert to decimal Coordinates
	// const latitude = latDeg + latMin / 60 + latSec / 3600;
	// const longitude = lonDeg + lonMin / 60 + lonSec / 3600;
	const latitude = latDeg + latMin + latSec;
	const longitude = lonDeg + lonMin + lonSec;

	// console.log(`${latitude} : ${longitude}`);

	// add point to map
	const point = L.circle([latitude, longitude], pointSettings).addTo(myMap);
	point.bindPopup(title);

	// convert to 6 decimal place strings
	const convertedLat = latitude.toFixed(6);
	const convertedLon = longitude.toFixed(6);

	// Add point to local storage
	const storage = { title: title, lat: convertedLat, lon: convertedLon };
	toLocalStorage(storage);

	// Add Point to Layer
	let newPoint = L.layerGroup([point]);
	overlayMaps.myPoints.addLayer(newPoint);

	// Fly Map to point
	myMap.flyTo([convertedLat, convertedLon]);

	//Log
	console.log(`${title}: ${convertedLat} , ${convertedLon}`);

	// Clear Form
	form.reset();
}

export default addDmsPoint;
