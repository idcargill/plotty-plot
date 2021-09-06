import { myMap } from './map/mapSetup.js';
import addCoordinatePoint from './helpers/addCoordinatePoint.js';
import addDmsPoint from './helpers/addDmsPoint.js';
import fileParser from './fileUpload/fileParser.js';
import addPointOnClick from './helpers/addPointOnClick.js';
import clearLocalHistory from './helpers/clearHistory.js';
import loadLocalStoragePoints from './helpers/loadLocalStoragePoints.js';

// Load Local Storage points
loadLocalStoragePoints();

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

// EVENT Add Point on Click
const pointsToggle = { active: false };
const addPointsBtn = document.querySelector('#click-point');
addPointsBtn.addEventListener('click', (e) => {
	pointsToggle.active = !pointsToggle.active;
	console.log(pointsToggle.active);

	if (pointsToggle.active) {
		addPointOnClick(e);
	} else {
		addPointsBtn.removeEventListener('click', addPointOnClick);
	}
});

// Set points to show by default
document.querySelector(
	'div.leaflet-control-layers-overlays > label > div > input'
).checked = true;

export { myMap };
