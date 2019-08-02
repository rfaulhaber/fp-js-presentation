const filter = (values, func) => {
	const ret = [];

	for (let i = 0; i < values.length; i++) {
		const element = values[i];

		if (func(element)) {
			ret.push(element);
		}
	}

	return ret;
};

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evens = filter(numbers, n => n % 2 === 0);
// => [0, 2, 4, 6, 8, 10]

const isEven = num => num % 2 === 0;
isEven(2); // => true
isEven(3); // => false

// don't repeat yourself! ¯\_(ツ)_/¯
const odds = filter(numbers, n => !isEven(n));
// => [1, 3, 5, 7, 9]
