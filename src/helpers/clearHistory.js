// Clear local history and map points

import { myMap, overlayMaps } from '../map/mapSetup.js';

function clearLocalHistory(e) {
	if (confirm('Would you like to delete your data points?')) {
		localStorage.clear();
		// myMap.removeLayer(overlayMaps.myPoints);
		overlayMaps.myPoints.remove();
		console.log(localStorage);
		console.log(overlayMaps.myPoints);
		e.target.textContent = 'Cleared';
	}
}

export default clearLocalHistory;
