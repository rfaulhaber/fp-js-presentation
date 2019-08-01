const numbers = [20, 25, 29, 35, 41, 42, 43, 45, 52, 55, 60, 61, 68, 69, 72, 78, 85, 95, 100];

const lessThanOr40 = x => x <= 40;
const greaterThanOr80 = x => x >= 80;

// author's note: many of these functions are very naive implementations and
// should not be used in production! These are for demo purposes only!

// composeFilters is a function that combines several filter
// functions and "or"s them
const composeFilters = (...filters) => item => filters.reduce((prev, current) => prev(item) || current(item));

const filters = composeFilters(lessThanOr40, greaterThanOr80);

const add = x => y => x + y;
const add10 = add(10);

const sum = vals => vals.reduce((sum, val) => sum + val, 0);
const average = values => sum(values) / values.length;

const pipe = (...funcs) => item => {
    let result = funcs.shift()(item);

    while (funcs.length > 0) {
        result = funcs.shift()(result);
    }

    return result;
};

const map = func => item => item.map(func);

const process = pipe(
    val => val.filter(filters),
    val => val.map(add10),
    average
);

const processed = process(numbers);

console.log(filtered); // => [ 10, 23, 14 ]
