import readUpload from './readUpload.js';

function fileParser(file) {
	const { name, type, size } = file;
	const geoJ = /[.]geojson/i;
	const j = /[.]json/i;

	// JSON FILE
	if (j.test(name)) {
		console.log(`Json Test ${name} JSON FILE`);
		readUpload(file);
	}

	// GeoJson File
	if (geoJ.test(name)) {
		console.log(`GEO TEST ${name} GEOJSON File`);
		console.log(file);
		readGeoJson(file);
	}
}

function readGeoJson(file) {
	console.log('Reading File');
	let reader = new FileReader();
	reader.onload = (x) => {
		const readFile = JSON.parse(x.target.result);

		const data = Object.values(readFile);
		data.forEach((i) => {
			console.log(i);
		});
		reader.readAsText(file);
	};
}

export default fileParser;
