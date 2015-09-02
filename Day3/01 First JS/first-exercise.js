var numbers = '80:70:90:100';
var numbers_split = numbers.split(":");

function calculateSum(numbers) {
	var sum = 0;
	numbers.forEach(function (x) {
		x = parseInt(x)
		sum += x;
	})
	return sum;
}

function getHighestNumber(numbers) {
	var filtered = Math.max.apply( Math, numbers);
	return filtered;
}

function giveObject(numbers) {
	var sum = calculateSum(numbers);
	var stats = {
		sum: sum,
		average: sum/numbers.length,
		highest_number: getHighestNumber(numbers)
	};
	return stats;
}

console.log(giveObject(numbers_split));