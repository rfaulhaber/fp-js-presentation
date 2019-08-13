function curry(func) {
    const arity = func.length;

    return function inner(...args) {
        if (args.length >= arity) {
            return func(...args);
        } else {
            return function(...nextArgs) {
                return inner(...args, ...nextArgs);
            }
        }
    }
}

// example usage

const threeArray = (a, b, c) => [a, b, c];

const curriedThree = curry(threeArray);
console.log(curriedThree(1, 2, 3)); // => [ 1, 2, 3 ]
console.log(curriedThree(1, 2)(3)); // => [ 1, 2, 3 ]
console.log(curriedThree(1)(2, 3)); // => [ 1, 2, 3 ]
console.log(curriedThree(1)(2)(3)); // => [ 1, 2, 3 ]