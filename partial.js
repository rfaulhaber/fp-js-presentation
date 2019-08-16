const add = (x, y) => x + y;

function partialAdd(x) {
	return function(y) {
		return add(x, y);
	};
}

const add10 = partialAdd(10);
add10(2); // => 12
