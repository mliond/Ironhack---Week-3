// console.log("Hello World");

// comment

/* multiline comment */

var x; // new variables must be initiated with 'var'

// for equal comparisons you need === (3 * =)
// use {} instead of end in Ruby
// else if instead of elsif in Ruby
// new functions by function keyword instead of def
// example: 

var food = "Salad";

function check_food(food) { 
	if (food === "Pizza") {
		console.log("Delicious pizza!!");
	} else if (food === "Cookies") {
		console.log("Cookies are good, too");
	} else {
		console.log("Disgusting " + food);
	}
}

check_food(food);

// loops

var i; 

for (i = 1; i <= 10; i += 1) {
	console.log(i);
}

var i = 1;

while (i <= 10) {
	console.log(i);
	i += 1;
}

// map function

function doubles(x) {
	return x *2 ;
}

var arr = [1,2,3,4];
x2 = arr.map(doubles)

console.log(x2)

// reduce function

var foods = ['pizza', 'cookies', 'spinach'];

var msg = foods.reduce(function (pre, food) {
	return pre + ' AND ' + food;
});

console.log(msg)

// each loop

var foods = ['pizza', 'cookies', 'spinach'];

foods.forEach(function (food) {
	console.log("I like " + food.toUpperCase());
})

// each loop exercise

var nums = [1,2,3,4,5];

function multArray(arr, num) {
	var new_arr = arr.map(function multiply(x) {
		return x * num;
	})
	return new_arr;
}

console.log(multArray(nums, 10))

// other loop exercise

var a = [4,2,3,72];

function myLog(x) {
	console.log(x);
}


function myForEach(arr, func) {
// one option:
	arr.forEach(function (x) {
		func(x);
	})

// or alternatively: 

	for (var i=0; i < arr.length; i ++ ){
		func(arr[i]);
	}
}

myForEach(a, myLog);

// generic objects are like Ruby's hashes

var obj = {
	food: 'pizza',
	amount: 9999
};

var keys = Object.keys(obj)

console.log(obj);
console.log(obj.food);
console.log(keys)