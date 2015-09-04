var fs = require('fs');

function slideLoader (file, callback) {
	function splitSlides(error, content) {
		if (error) {
			console.log("oh no", error)
		} else {
			var slides = content.split('\n---\n')
			callback(slides)
		}
	}
	fs.readFile(file, 'utf8', splitSlides);
} 

module.exports = slideLoader;