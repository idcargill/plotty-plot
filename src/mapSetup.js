import token from './mapboxToken.js';
import { circleSettings, pointSettings } from './mapSettings.js';

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

export default myMap;
