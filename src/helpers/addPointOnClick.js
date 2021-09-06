import { myMap, overlayMaps } from '../map/mapSetup.js';
import { circleSettings, pointSettings } from '../map/mapSettings.js';

function addPointOnClick(ev) {
	myMap.on('click', (ev) => {
		let lat = ev.latlng.lat;
		let lon = ev.latlng.lng;
		const point = L.circle([lat, lon], pointSettings);
		let newLayer = L.layerGroup([point]);
		overlayMaps.myPoints.addLayer(newLayer);
	});
}

export default addPointOnClick;
