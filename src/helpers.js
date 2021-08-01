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

// takes in object
function toLocalStorage(x) {
	const myPoints = localStorage.getItem('myPoints');
	if (myPoints) {
		const storage = [];
		const parsedPoints = JSON.parse(myPoints);
		storage.push(parsedPoints);
		storage.push(x);
		const updatedString = JSON.stringify(storage);
		localStorage.setItem('myPoints', updatedString);
	} else {
		const point = JSON.stringify(x);
		localStorage.setItem('myPoints', point);
	}
}

export { createListElements, toLocalStorage };
