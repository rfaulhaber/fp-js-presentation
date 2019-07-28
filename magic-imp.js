const numbers = [4, 10, 0, 27, 42, 17, 15, -6, 58];
const faves = [];
const magicNumber = 0;

pickFavoriteNumbers();
calculateMagicNumber();
outputMsg(); // => The magic number is: 42

function pickFavoriteNumbers() {
    for (let num of numbers) {
        if (num >= 10 && num <= 20) {
            faves.push(num);
        }
    }
}

function calculateMagicNumber() {
    for (let fave of faves) {
        magicNumber = magicNumber + fave;
    }
}

function outputMsg() {
    const msg = `The magic number is: ${magicNumber}`;
    console.log(msg);
}

// adapted from:
// https://github.com/getify/Functional-Light-JS/blob/master/manuscript/ch1.md/#chapter-1-why-functional-programming
