import { myMap, overlayMaps } from '../map/mapSetup.js';
import { circleSettings, pointSettings } from '../map/mapSettings.js';
import toLocalStorage from './toLocalStorage.js';

function addPointOnClick(ev) {
	myMap.on('click', (ev) => {
		let lat = parseFloat(ev.latlng.lat);
		let lon = parseFloat(ev.latlng.lng);
		const point = L.circle([lat, lon], pointSettings);
		let newLayer = L.layerGroup([point]);
		overlayMaps.myPoints.addLayer(newLayer);

		const pointObj = { Title: 'ClickPoint', lat: lat, lon: lon };
		console.log(pointObj);

		// add point to storage
		toLocalStorage(pointObj);
	});
}

export default addPointOnClick;
