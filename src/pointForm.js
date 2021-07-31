import { toLocalStorage } from './helpers.js';
const form = document.querySelector('.coordinate form');

function addCustomPoint() {
	form.addEventListener('submit', (ev) => {
		ev.preventDefault();
		const title = ev.target.title.value;
		const lat = ev.target.lat.value;
		const lon = ev.target.lon.value;
		const value = { title: title, lat: lat, lon: lon };
		// console.log(value);
		toLocalStorage(value);
		form.reset();
	});
}

export default addCustomPoint();
