let state = {
	color: 'red',
	number: 22
};

function doSomething() {
	state.color = 'blue';
}

function changeMyStuff(val) {
	val.name = 'side effect';
	val[0] = 'who knows what this does!';
}

const x = {};

changeMyStuff(x);

console.log(x);
// { '0': 'who knows what this does!', name: 'side effect' }

function foo(x) {
	return x + y;
}

var y = 22;

foo(1);
// => 23

function impureSum(arr) {
	let sum = 0;

	while (arr.length > 0) {
		sum += arr.shift();
	}

	return sum;
}

const nums = [1, 2, 3, 4, 5];
const sum = impureSum(nums);
// => 15

console.log(nums);
// => []


const myArr = [1, 2, 3];

function getNewValues(arr) {
	return arr.concat(arr.map(val => val * 10));
}