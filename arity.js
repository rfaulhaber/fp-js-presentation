function add(x, y) {
    return x + y;
}

add.length; // => 2

function sum(...numbers) {
    return numbers.reduce(add);
}

sum.length; // => 0