var slideLoader = require ('./slideloader.js')

slideLoader('slides.txt', function (slides) {
	slides.forEach(function (slide) {
		console.log('\n\n\n\n    ' + slide);
	});
});