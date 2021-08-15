import toLocalStorage from '../helpers/toLocalStorage.js';
import { pointSettings } from '../mapSettings.js';
import { myMap, overlayMaps } from '../mapSetup.js';
const form = document.querySelector('#dms-form');

function addDmsPoint() {
  const title = form.title.value;

  // Latitude Degrees
  const latDeg = +form.latDeg.value;
  const latMin = +form.latDeg.value;
  const latSec = +form.latSec.value;

  // Longitude Degrees
  const lonDeg = +form.lonDeg.value;
  const lonMin = +form.lonDeg.value;
  const lonSec = +form.lonSec.value;

  // Convert to decimal Coordinates
  const latitude = latDeg + latMin / 60 + latSec / 3600;
  const longitude = lonDeg + lonMin / 60 + lonSec / 3600;

  // add point to map
  const point = L.circle([latitude, longitude], pointSettings).addTo(myMap);
  point.bindPopup(title);

  // convert to 6 decimal place strings
  const convertedLat = latitude.toFixed(6);
  const convertedLon = longitude.toFixed(6);

  // Add point to local storage
  const storage = { title: title, lat: convertedLat, lon: convertedLon };
  toLocalStorage(storage);

  // Add Point to Layer
  let newPoint = L.layerGroup([point]);
  overlayMaps.myPoints.addLayer(newPoint);

  // Fly Map to point
  myMap.flyTo([convertedLat, convertedLon]);

  //Log
  console.log(`${title}: ${convertedLat} , ${convertedLon}`);

  // Clear Form
  form.reset();
}

export default addDmsPoint;
