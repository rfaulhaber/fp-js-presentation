let numbers = [1, 2, 8, 5, 4, 10, 23, 14, 47];

removeNumbers();

function removeNumbers() {
    for (let i = 0; i < numbers.length; i++) {
        let num = numbers[i];

        if (num <= 10 || num >= 30) {
            numbers.splice(i, 1);
        }
    }
}

console.log(numbers); // => [ 2, 5, 10, 23, 14 ];
