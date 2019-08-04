const toUpperCase = str => str.toUpperCase();
const exclaim = str => str + '!';

const str = 'send in the clowns';

const shout = toUpperCase(exclaim(str));
// => 'SEND IN THE CLOWNS!'
