import { myMap } from './mapSetup.js';
import { addCoordinatePoint } from './helpers/addCoordinatePoint.js';
import makeMyPoints from './helpers/makeMyPoints.js';
import addDmsPoint from './helpers/addDmsPoint.js';
import fileParser from './fileUpload/fileParser.js';
import { addPointOnClick } from './helpers/addPointOnClick.js';
import readUpload from './fileUpload/readUpload.js';

// Add points when clicked on map
let pointToggle = 0;

// Clear local storage for testing
document.querySelector('#clear').addEventListener('click', () => {
	localStorage.clear();
	console.log('Memory Cleared');
});

// Show My Points Event
document.querySelector('#show-points').addEventListener('click', makeMyPoints);

// add points on map by clicking
document.querySelector('#click-point').addEventListener('click', (ev) => {
	if (pointToggle == 0) {
		pointToggle = 1;
		// myMap.on('click', addPointClick);
		ev.target.textContent = 'ADD Points: ON';
		ev.target.setAttribute('class', 'on');
		console.log('on');
	} else if (pointToggle == 1) {
		ev.target.textContent = 'ADD Points: OFF';
		ev.target.setAttribute('class', 'off');
		pointToggle = 0;
		// myMap.off('click', myMap, addPointClick);
		console.log('off');
	}
});

// EVENT Add Coordinate Point to storage and map
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
	// readUpload(uploadedFile);
});

// EVENT Drop File
const dropSpot = document.querySelector('.drop-location');
dropSpot.addEventListener('drop', (ev) => {
	ev.preventDefault();
	// document.querySelector('.drop-location').textContent = 'dropped';
	console.log(ev.dataTransfer.items);
});

dropSpot.addEventListener('dragover', (ev) => {
	ev.preventDefault();
});

export { myMap };
