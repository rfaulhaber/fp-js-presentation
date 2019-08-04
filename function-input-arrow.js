const noParameters = () => console.log('hello world');

noParameters();
// => prints 'hello world!'

const namedParameters = (one, two, three) => [one, two, three];

namedParameters(1, 2, 3);
// => [1, 2, 3]

const defaultParameters = (one = 1, two = 2, three = 3) => namedParameters(one, two, three);

defaultParameters();
// => [1, 2, 3]

defaultParameters(10, 11);
// => [10, 11, 3]

const restParameters = (...args) => args.length;

restParameters(1, 2, 3, 4, 5);
// => 5
