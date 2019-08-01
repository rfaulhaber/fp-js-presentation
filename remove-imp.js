let numbers = [20, 25, 29, 35, 41, 42, 43, 45, 52, 55, 60, 61, 68, 69, 72, 78, 85, 95, 100];

function removeNumbers() {
    for (let i = 0; i < numbers.length; i++) {
        let num = numbers[i];

        if (num <= 40 || num >= 80) {
            numbers.splice(i, 1);
        }
    }
}

removeNumbers();

console.log(numbers);
// => [ 25, 35, 41, 42, 43, 45, 52, 55, 60, 61, 68, 69, 72, 78, 95 ]
