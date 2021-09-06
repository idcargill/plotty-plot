const circleSettings = {
	color: 'blue',
	fillColor: 'lightblue',
	fillOpacity: 0.5,
	radius: 500,
};

const pointSettings = {
	color: 'maroon',
	fillColor: 'red',
	fillOpacity: 0.5,
	radius: 500,
};

export { circleSettings, pointSettings };

// LEAFLET METHODS
// Create Marker
// const home = L.marker([51.5, -0.09]).addTo(myMap);

// Create Circle
// const circle = L.circle([51.499, -0.0899], circleSettings).addTo(myMap);

// Create Polygon array of lat/lon
// const polygon = L.polygon([
// 	[51.509, -0.08],
// 	[51.503, -0.06],
// 	[51.51, -0.047],
// ]).addTo(myMap);

// Popups attatched to map objects
// home.bindPopup('<b>Hello Maps</b><br>I am a popup.').openPopup();
// circle.bindPopup('I am a circle');
// polygon.bindPopup('Blue area');
