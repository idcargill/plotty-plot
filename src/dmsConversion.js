import { toLocalStorage } from './helpers.js';
const form = document.querySelector('#dms-form');

function dmsConversion() {
  form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const title = ev.target.title.value;
    const lonDeg = +ev.target.lonDeg.value;
    const lonMin = +ev.target.lonMin.value;
    const lonSec = +ev.target.lonSec.value;
    const longitude = lonDeg + lonMin / 60 + lonSec / 3600;
    const convertedLon = longitude.toFixed(6);

    const latDeg = +ev.target.latDeg.value;
    const latMin = +ev.target.latMin.value;
    const latSec = +ev.target.latSec.value;
    const latitude = latDeg + latMin / 60 + latSec / 3600;
    const convertedLat = latitude.toFixed(6);
    console.log(convertedLat);
    form.reset();

    const storage = { title: title, lat: convertedLat, lon: convertedLon };
    // takes object
    toLocalStorage(storage);
  });
}

export default dmsConversion();
