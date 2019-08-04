const threeArray = (a, b, c) => [a, b, c];

function curriedThreeArray(a) {
	return function(b) {
		return function(c) {
			return threeArray(a, b, c);
		};
	};
}

const curriedThreeArrayArrow = a => b => c => threeArray(a, b, c);

const array = curriedThreeArray(1)(2)(3); // => [1, 2, 3]

const startsWith100and200 = curriedThreeArray(100)(200);
const result = startsWith100and200(3); // => [100, 200, 3]
