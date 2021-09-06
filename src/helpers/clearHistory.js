// Clear local history and map points

import { overlayMaps } from '../map/mapSetup.js';

function clearLocalHistory() {
	if (confirm('Would you like to delete your data points?')) {
		localStorage.clear();
		// myMap.removeLayer(overlayMaps.myPoints);
		overlayMaps.myPoints.remove();
	}
}

export default clearLocalHistory;
