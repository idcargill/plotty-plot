import { circleSettings } from './mapSettings.js';
import { myMap } from './index.js';

function makeMyPoints() {
  const storage = localStorage.getItem('myPoints');
  const storageArr = JSON.parse(storage);
  console.log(storageArr);

  // generate points from local storage
  if (storageArr instanceof Array) {
    storageArr.forEach((i) => {
      const lat = parseFloat(i.lat);
      const lon = parseFloat(i.lon);
      const title = i.title;
      console.log(lat, lon, title);
      const circle = L.circle([lat, lon], circleSettings).addTo(myMap);
      circle.bindPopup(title);
    });
    console.log('points displayed');
  }
  // map a single point form obj
  const lat = storageArr.lat;
  const lon = storageArr.lon;
  const title = storageArr.title;
  console.log(lat, lon, title);
  const circle = L.circle([lat, lon], circleSettings).addTo(myMap);
  circle.bindPopup(title);
}

export default makeMyPoints;
