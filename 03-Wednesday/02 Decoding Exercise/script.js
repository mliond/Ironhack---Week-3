arr = ["dead", "bygone", "landing", "cheaply", "assumed", "incorrectly", "attention", "agent"]
arr2= ["January", "lacks", "caveats", "hazardous", "DOORS", "crying", "arrogantly", "climate", "proponent", "rebuttal"] 

sentence = "dead, bygone, landing, cheaply, assumed, incorrectly, attention, agent"

// function change_arr(arr, command) {
function change_arr(sentence, command) {
	// var command = command.split("-");
	var sentence = sentence.split(" ");
	if (command[1] === "backward") {
		arr = arr.reverse();
	}	
	if (command[0] === "even") {
		arr = arr.filter(function(word, index) {
			return index % 2 === 1
		})
	}
	else if (command[0] === "odd") {
		arr = arr.filter(function(word, index) {
			return index % 2 === 0
		})
	}
	return arr;
} 



function decode(arr) {
	var secretmessage = "";
	for (var i = 0; i < arr.length; i ++ ) {
		var k = i % 5;
		secretmessage += arr[i][k];
	}	
	return secretmessage;
}

module.exports = decode;


console.log(decode(change_arr(sentence, "all-forward")));
// console.log(decode(change_arr(arr, "odd-forward")));