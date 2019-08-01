const numbers = [20, 25, 29, 35, 41, 42, 43, 45, 52, 55, 60, 61, 68, 69, 72, 78, 85, 95, 100];

const filteredWithArrow = numbers.filter(x => x <= 40 || x >= 80);

const filteredWithFunction = numbers.filter(function(x) {
    return x <= 40 || x >= 80;
});

console.log(filteredWithArrow); // => [ 20, 25, 29, 35, 85, 95, 100 ]
