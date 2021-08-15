import { map, baseMaps } from './baseMaps.js';
import newMarker from './marker.js';
import handleClick from './handleClick.js';

// Empty Layer
const myPoints = L.layerGroup([]);

// Overlay Layers
const overlay = {
  myPoints: myPoints,
};

// Add Initial Controls
L.control.layers(baseMaps, overlay).addTo(map);

// EVENT Button Pressed - add a layer
const button = document.querySelector('#addLayer');
button.addEventListener('click', handleClick);

// To load up new layers after initialization
export { overlay };
