import { myMap } from './map/mapSetup.js';
import { addCoordinatePoint } from './helpers/addCoordinatePoint.js';
import addDmsPoint from './helpers/addDmsPoint.js';
import fileParser from './fileUpload/fileParser.js';
import clearLocalHistory from './helpers/clearHistory.js';
import loadFromLocalStorage from './helpers/loadFromLocalStorage.js';

// EVENT Add Coordinate Point
const addCoordinateBtn = document.querySelector('#coordBtn');
addCoordinateBtn.addEventListener('click', addCoordinatePoint);

// EVENT Add DMS Point
const dmsBtn = document.querySelector('#dmsBtn');
dmsBtn.addEventListener('click', addDmsPoint);

// EVENT File UPLOAD or DROP
const fileInput = document.querySelector('#file-loader');
fileInput.addEventListener('change', (ev) => {
	ev.preventDefault();
	const uploadedFile = fileInput.files[0];
	fileParser(uploadedFile);
});

// EVENT Drop File
const dropSpot = document.querySelector('.drop-location');
dropSpot.addEventListener('drop', (ev) => {
	ev.preventDefault();
	console.log(ev.dataTransfer.items);
});
dropSpot.addEventListener('dragover', (ev) => {
	ev.preventDefault();
});

// EVENT Clear Local Storage with Alert Confirmation
document.querySelector('#clear').addEventListener('click', (e) => {
	clearLocalHistory(e);
});

// Set points to show by default
document.querySelector(
	'div.leaflet-control-layers-overlays > label > div > input'
).checked = true;

// Load Local Storage points
loadFromLocalStorage();
export { myMap };
