function blastOff(seconds) {
	function countdown () {
		console.log(seconds);
		seconds -= 1;		
		if (seconds >= 0) {
			setTimeout(countdown, 1000);
		} else {
			console.log("Boom");
		}
	}
	countdown();
}

blastOff(5);