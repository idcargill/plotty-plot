import { myMap } from './map/mapSetup.js';
import { addCoordinatePoint } from './helpers/addCoordinatePoint.js';
import addDmsPoint from './helpers/addDmsPoint.js';
import fileParser from './fileUpload/fileParser.js';
import addPointOnClick from './helpers/addPointOnClick.js';
import clearLocalHistory from './helpers/clearHistory.js';
import loadLocalStorage from './helpers/loadLocalStorage.js';

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
document.querySelector('#click-point').addEventListener('click', (e) => {
	addPointOnClick();
});

// Set points to show by default
document.querySelector(
	'div.leaflet-control-layers-overlays > label > div > input'
).checked = true;

// Load Local Storage points
loadLocalStorage();

export { myMap };

// // Add points when clicked on map
// let pointToggle = 0;

// // Show My Points Event
// document.querySelector('#show-points').addEventListener('click', makeMyPoints);

// // add points on map by clicking
// document.querySelector('#click-point').addEventListener('click', (ev) => {
//   if (pointToggle == 0) {
//     pointToggle = 1;
//     // myMap.on('click', addPointOnClick);
//     ev.target.textContent = 'ADD Points: ON';
//     ev.target.setAttribute('class', 'on');
//     console.log('on');
//   } else if (pointToggle == 1) {
//     ev.target.textContent = 'ADD Points: OFF';
//     ev.target.setAttribute('class', 'off');
//     pointToggle = 0;
//     // myMap.off('click', myMap, addPointClick);
//     console.log('off');
//   }
// });
