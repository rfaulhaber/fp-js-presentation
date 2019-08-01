const invalid = myFunc(4, 5); // ReferenceError: myFunc is not defined

const myFunc = function someNamedFunction(x, y) {
    return x + y;
};

const sum = myFunc(2, 3);
