// Set up to start parsing file types...removed for time.

import readUpload from './readUpload.js';

function fileParser(file) {
	const { name } = file;
	const j = /[.]json/i;

	// JSON FILE
	if (j.test(name)) {
		console.log(`Json Test ${name} JSON FILE`);
		readUpload(file);
	}
}

export default fileParser;
