import toLocalStorage from './toLocalStorage.js';
import { pointSettings } from '../mapSettings.js';
import { myMap, overlayMaps } from '../mapSetup.js';
const form = document.querySelector('.coordinate-form');

function addCoordinatePoint() {
  const title = form.coordTitle.value;
  const lat = parseFloat(form.lat.value);
  const lon = parseFloat(form.lon.value);
  const result = { Title: title, lat: lat, lon: lon };

  // send point to local storage
  toLocalStorage(result);
  console.log(`new data point: ${result.Title} ${lat}, ${lon}`);

  // Add point to map
  const point = L.circle([lat, lon], pointSettings).addTo(myMap);
  point.bindPopup(title);

  // add featureGroup layer
  const pointArr = [];
  pointArr.push(point);
  let newLayer = L.layerGroup(pointArr);
  overlayMaps.myPoints.addLayer(newLayer);
  form.reset();
}

export { addCoordinatePoint };
