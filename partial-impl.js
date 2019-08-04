function partial(func, ...fixedArgs) {
	return function(...otherArgs) {
		return func(...fixedArgs, ...otherArgs);
	};
}

const add = (x, y) => x + y;

const add10 = partial(add, 10);
add10(11); // => 21

const return42 = partial(add, 21, 21);
return42(); // => 42
