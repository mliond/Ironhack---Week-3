var decode = require("./decoder.js");
var sentences = require("./sentences.js");
var all_possibilities = require("./possibilities.js");
var super_decoder = require("./super_decoder.js");

function main_loop(sentences) {
	var all_code = [];
	sentences.forEach(function (sentence) {
		all_possibilities.forEach(function (x) {
			all_code.push(decode(super_decoder(sentence, x)));
		})
	})
	return all_code;
}

console.log(main_loop(sentences));