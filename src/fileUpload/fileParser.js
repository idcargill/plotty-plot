import readUpload from './readUpload.js';

function fileParser(file) {
	const { name, type, size } = file;
	const geoJ = /[.]geojson/i;
	const j = /[.]json/i;

	// JSON FILE
	if (j.test(name)) {
		console.log(`${name} JSON FILE`);
		readUpload(file);
	}

	// GeoJson File
	if (geoJ.test(name)) {
		console.log(`${name} GEOJSON File`);
	}
}

export default fileParser;
