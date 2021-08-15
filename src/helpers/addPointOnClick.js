function addPointOnClick(ev) {
	if (pointToggle == 1) {
		myMap.on('click', (ev) => {
			console.log(pointToggle);
			let latitude = ev.latlng.lat;
			let longitude = ev.latlng.lng;
			L.circle([latitude, longitude], circleSettings).addTo(myMap);
			pop.setLatLng(ev.latlng).setContent(ev.latlng.toString()).openOn(myMap);
		});
	} else {
		myMap.off('click', addPointClick);
		console.log('nope');
	}
}

export { addPointOnClick };
