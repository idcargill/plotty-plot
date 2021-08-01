// Creates table row with td elements from uploaded JSON file
function createListElements(arrayData) {
	const listylist = arrayData.map((i) => {
		const tr = document.createElement('tr');
		const title = document.createElement('td');
		const lat = document.createElement('td');
		const lon = document.createElement('td');
		title.textContent = `${i.Title}`;
		lat.textContent = `${i.lat}`;
		lon.textContent = `${i.lon}`;
		tr.append(title);
		tr.append(lat);
		tr.append(lon);
		return tr;
	});
	return listylist;
}

export default createListElements;
