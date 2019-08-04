function noParameters() {
	console.log('hello world');
}

noParameters();
// => prints 'hello world!'

function namedParameters(one, two, three) {
	return [one, two, three];
}

namedParameters(1, 2, 3);
// => [1, 2, 3]

function defaultParameters(one = 1, two = 2, three = 3) {
	return namedParameters(one, two, three);
}

defaultParameters();
// => [1, 2, 3]

defaultParameters(10, 11);
// => [10, 11, 3]

function restParameters(...args) {
	return args.length;
}

restParameters(1, 2, 3, 4, 5);
// => 5
