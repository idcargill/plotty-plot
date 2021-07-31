function fileParser(file) {
	const { name, type, size } = file;
	console.log(file);

	switch (type) {
		case 'application/json':
			console.log('json');
			break;
		default:
			console.log(type);
	}
}

export default fileParser;
