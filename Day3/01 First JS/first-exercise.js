var numbers = '80:70:90:100';
var numbers_split = numbers.split(":");

function calculateStats(numbers) {
	var sum = 0;
	numbers.forEach(function (x) {
		x = parseInt(x)
		sum += x;
	})

	var stats = {
		sum: sum,
		average: sum/numbers.length
	};

	return stats;
}


console.log(calculateStats(numbers_split));
// average(numbers) = 85