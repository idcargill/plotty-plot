// Public access Token
const token =
	'pk.eyJ1IjoiaWRjYXJnaWxsIiwiYSI6ImNrcmh1MGY3bTBvaHgydm80ejhkcjVoMjEifQ.Kzjr5NN2uxIGUBGzgMteLg';

// Map loads into DOM id (needs height)
// eslint-disable-next-line no-undef
const myMap = L.map('leafletmap').setView([51.505, -0.09], 5);

// Satalite Map
// eslint-disable-next-line no-undef
const satalite = L.tileLayer(
	'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
	{
		attribution:
			'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		maxZoom: 18,
		id: 'mapbox/satellite-v9',
		tileSize: 512,
		zoomOffset: -1,
		accessToken: token,
	}
).addTo(myMap);

// TOPO Map
// eslint-disable-next-line no-undef
const outdoors = L.tileLayer(
	'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
	{
		attribution:
			'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		maxZoom: 18,
		id: 'mapbox/outdoors-v11',
		tileSize: 512,
		zoomOffset: -1,
		accessToken: token,
	}
).addTo(myMap);

// Base Maps Layers
const baseMaps = {
	topo: outdoors,
	satalite: satalite,
};

// Empty Overlay container
// eslint-disable-next-line no-undef
const emptyLayer = L.layerGroup([]);
const overlayMaps = {
	myPoints: emptyLayer,
};

// Initialize Map Controls
// eslint-disable-next-line no-undef
L.control.layers(baseMaps, overlayMaps).addTo(myMap);

// Set points to show by default
document.querySelector(
	'div.leaflet-control-layers-overlays > label > div > input'
).checked = true;

export { myMap, overlayMaps };
