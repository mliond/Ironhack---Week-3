function super_decoder(sentence, command) {
		var command = command.split("-");
		var arr = sentence.split(" ");
		if (command[1] === "backward") {
			arr = arr.reverse();
		}	
		if (command[0] === "even") {
			arr = arr.filter(function(word, index) {
				return index % 2 === 1; // condition to be true for this
			})
		}
		if (command[0] === "odd") {
			arr = arr.filter(function(word, index) {
				return index % 2 === 0;
			})
		}
		return arr;
	} 

module.exports = super_decoder;