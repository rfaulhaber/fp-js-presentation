const add = (x, y) => x + y;

const numbers = [1, 2, 3, 4, 5];

function partialAdd(x) {
	return function(y) {
		return add(x, y);
	};
}

const add10 = partialAdd(10);
add10(2); // => 12
