const numbers = [1, 2, 8, 5, 4, 10, 23, 14, 47];

const greaterThanOr10 = x => x >= 10;
const lessThanOr30 = x => x <= 30;

const filter = func => items => items.filter(func);

const compose = (...funcs) => item => {
    let result = funcs.pop()(item);

    while (funcs.length > 0) {
        result = funcs.pop()(result);
    }

    return result;
};

const filterNumbers = compose(
    filter(greaterThanOr30),
    filter(lessThanOr5)
);

const filtered = filterNumbers(numbers);

console.log(filtered); // => [ 10, 23, 14 ]
