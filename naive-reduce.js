// JS calls it "reduce" but the FP world calls it "fold"
const reduce = (values, reducer, initialValue) => {
    // we don't want to mutate the array so we copy it
    let newValues = values.slice();
    let result = initialValue || newValues.shift();

    while (newValues.length > 0) {
        const nextValue = newValues.shift();
        result = reducer(result, nextValue);
    }

    return result;
};

const numbers = [1, 2, 3, 4, 5];
const result = fold(numbers, (acc, val) => acc + val);
// => 15

// DRY!
const add = (x, y) => x + y;

const sameResult = fold(numbers, add);
// => 15
