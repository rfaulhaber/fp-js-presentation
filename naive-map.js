// this function signature is the same as:
// function map(values, func) { ... }
const map = (values, func) => {
    const ret = [];

    for (let i = 0; i < values.length; i++) {
        const computed = func(values[i]);
        ret.push(computed);
    }

    return ret;
};

const strings = ['hello', 'world'];
const toUpper = str => str.toUpperCase();

console.log(map(strings, toUpper));
// => [ 'HELLO', 'WORLD' ]
