// takes in object
function toLocalStorage(x) {
	// get Local Points
	const myPoints = localStorage.getItem('myPoints');

	// Check for storage, add new point object
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

export default toLocalStorage;
