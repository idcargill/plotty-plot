import { myMap, overlayMaps } from '../map/mapSetup.js';

function clearLocalHistory(e) {
	if (confirm('Would you like to delete your data points?')) {
		localStorage.clear();
		myMap.removeLayer(overlayMaps.myPoints);
		console.log(localStorage);
		e.target.textContent = 'Cleared';
	}
}

export default clearLocalHistory;
