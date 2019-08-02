function add(x) {
	return function(y) {
		return x + y;
	};
}

const addArrow = x => y => x + y;

add(2)(3);
// => 5

const add10 = add(10);
add10(2);
// => 12
