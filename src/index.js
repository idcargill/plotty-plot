import myMap from './mapSetup.js';
import createListElements from './helpers/createListElements.js';
import { circleSettings } from './mapSettings.js';
import addCoordinatePoint from './helpers/addCoordinatePoint.js';
import makeMyPoints from './makeMyPoints.js';
import addDmsPoint from './helpers/addDmsPoint.js';
import fileParser from './helpers/fileParse.js';

// Add points when clicked on map
let pointToggle = 0;

function addPointClick(ev) {
	if (pointToggle == 1) {
		myMap.on('click', (ev) => {
			console.log(pointToggle);
			let latitude = ev.latlng.lat;
			let longitude = ev.latlng.lng;
			L.circle([latitude, longitude], circleSettings).addTo(myMap);
			pop.setLatLng(ev.latlng).setContent(ev.latlng.toString()).openOn(myMap);
		});
	} else {
		myMap.off('click', addPointClick);
		console.log('nope');
	}
}

function readUpload(fileLoaded) {
	let reader = new FileReader();
	reader.onload = (x) => {
		const data = JSON.parse(x.target.result);
		// console.log(data);

		const dataArr = Object.values(data);

		const listylist = createListElements(dataArr);
		console.log(listylist);

		listylist.sort(
			(a, b) => a.firstChild.textContent - b.firstChild.textContent
		);

		listylist.forEach((i) => {
			document.querySelector('#fileList').after(i);
			const lat = i.children[1].textContent;
			const lon = i.children[2].textContent;
			const circle = L.circle([lat, lon], circleSettings).addTo(myMap);
			circle.bindPopup(i.firstChild.textContent);
		});

		return data;
	};
	reader.readAsText(fileLoaded);
}

const fileInput = document.querySelector('#file-loader');

fileInput.addEventListener('change', (ev) => {
	ev.preventDefault();
	const uploadedFile = fileInput.files[0];
	// readUpload(uploadedFile);
	fileParser(uploadedFile);
});

// Clear local storage for testing
document.querySelector('#clear').addEventListener('click', () => {
	localStorage.clear();
	console.log('Memory Cleared');
	// myMap.removeLayer(cicle);
});

document.querySelector('#show-points').addEventListener('click', makeMyPoints);
export { myMap };

// add points on map by clicking
document.querySelector('#click-point').addEventListener('click', () => {
	if (pointToggle == 0) {
		pointToggle = 1;
		myMap.on('click', addPointClick);
		console.log('on');
	} else if (pointToggle == 1) {
		pointToggle = 0;
		myMap.off('click', myMap, addPointClick);
		console.log('off');
	}
});

// Add Coordinate Point to storage and map
const addCoordinateBtn = document.querySelector('#coordBtn');
addCoordinateBtn.addEventListener('click', addCoordinatePoint);

// Add DMS Point
const dmsBtn = document.querySelector('#dmsBtn');
dmsBtn.addEventListener('click', addDmsPoint);
