// Public access Token
const token =
	'pk.eyJ1IjoiaWRjYXJnaWxsIiwiYSI6ImNrcmh1MGY3bTBvaHgydm80ejhkcjVoMjEifQ.Kzjr5NN2uxIGUBGzgMteLg';

// Map loads into DOM id (needs height)
const myMap = L.map('leafletmap').setView([51.505, -0.09], 5);

const baseMap = L.tileLayer(
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

// Map Layers Obj.
const baseLayers = {
	base: baseMap,
};

const overlayMaps = {};

const mapControls = L.control.layers(baseLayers).addTo(myMap);

export { myMap, baseLayers, overlayMaps, mapControls };
