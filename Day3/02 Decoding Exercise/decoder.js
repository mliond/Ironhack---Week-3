function decode(arr) {
	var secretmessage = "";
	for (var i = 0; i < arr.length; i ++ ) {
		var k = i % 5;
		secretmessage += arr[i][k];
	}	
	return secretmessage;
}

module.exports = decode;