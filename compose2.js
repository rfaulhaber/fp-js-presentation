const toUpperCase = str => str.toUpperCase();
const exclaim = str => str + '!';

const str = 'send in the clowns';

const shout = composeNaive(toUpperCase, exclaim);
shout(str);
// => 'SEND IN THE CLOWNS!'

function composeNaive(f, g) {
    return function(val) {
        return f(g(val));
    };
}
