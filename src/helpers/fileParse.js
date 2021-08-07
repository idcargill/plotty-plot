function fileParser(file) {
	const { name, type, size } = file;
	console.log(file);

	switch (type) {
		case 'application/json':
			console.log('json');
			break;
		case 'application/geojson':
			console.log('geoJson');
		default:
			console.log('Default catch: ', type);
	}
}

export default fileParser;
