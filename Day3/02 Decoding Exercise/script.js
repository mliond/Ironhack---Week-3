arr = ["dead", "bygone", "landing", "cheaply", "assumed", "incorrectly", "attention", "agent"]
arr2= ["January", "lacks", "caveats", "hazardous", "DOORS", "crying", "arrogantly", "climate", "proponent", "rebuttal"] 

function change_arr(arr, direction) {
	var new_arr
	if (direction === "forward"){ 
		new_arr = arr;
	}	else if (direction === "backward") {
		new_arr = arr.reverse();
	}	
	return new_arr;
} 


function decode(arr) {
	var secretmessage = "";
	for (var i = 0; i < arr.length; i ++ ) {
		var k = i % 5;
		secretmessage += arr[i][k];
	}	
	return secretmessage;
}

console.log(decode(change_arr(arr, "backward")));
console.log(decode(change_arr(arr2, "forward")));