// takes in object
function toLocalStorage(x) {
	if (!x.lat | !x.lon) {
		console.log('no coordinates included');
	} else {
		const storage = [];
		const myPoints = localStorage.getItem('myPoints');
		// console.log(myPoints);

		if (myPoints) {
			const parsedPoints = JSON.parse(myPoints);

			// Pull array objs and reload storage arr
			if (parsedPoints.length > 0) {
				parsedPoints.forEach((i) => {
					storage.push(i);
				});

				// Only 1 storage object
			} else if (parsedPoints) {
				storage.push(parsedPoints);
			}

			// Load new object into storage arr
			storage.push(x);
			console.log(storage);

			// Load Local storage wtih array of objects
			const updatedString = JSON.stringify(storage);
			localStorage.setItem('myPoints', updatedString);

			// First item in storage
		} else if (!myPoints) {
			storage.push(x);
			const updatedString = JSON.stringify(x);
			localStorage.setItem('myPoints', updatedString);
		}
	}
}

export default toLocalStorage;
