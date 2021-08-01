import token from './mapboxToken.js';
import { createListElements } from './helpers.js';
import { circleSettings } from './mapSettings.js';
import addCoordinatePoint from './pointForm.js';
import makeMyPoints from './makeMyPoints.js';
import dmsConversion from './dmsConversion.js';
import fileParser from './fileParse.js';

// Map loads into DOM id (needs height)
const myMap = L.map('leafletmap').setView([51.505, -0.09], 5);

// Map Tiles
L.tileLayer(
	'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
	{
		attribution:
			'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		maxZoom: 18,
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1,
		accessToken: token,
	}
).addTo(myMap);

// Marker
const home = L.marker([51.5, -0.09]).addTo(myMap);

// Circle
const circle = L.circle([51.499, -0.0899], circleSettings).addTo(myMap);

// polygon array of lat/lon
const polygon = L.polygon([
	[51.509, -0.08],
	[51.503, -0.06],
	[51.51, -0.047],
]).addTo(myMap);

// Popups attatched to map objects
// home.bindPopup('<b>Hello Maps</b><br>I am a popup.').openPopup();
// circle.bindPopup('I am a circle');
polygon.bindPopup('Blue area');

// Popup on map
const pop = L.popup();

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
dmsBtn.addEventListener('click', dmsConversion);
