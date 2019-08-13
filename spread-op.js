function threeObj(a, b, c) {
    return {
        // verbose for the sake of presentation
        // could also be: return {a, b, c};
        a: a,
        b: b,
        c: c
    }
}

threeObj(1, 2, 3); // => { a: 1, b: 2, c: 3 }

const myThree = ['foo', 'bar', 'baz'];

threeObj(...myThree); 
// => { a: 'foo', b: 'bar', c: 'baz' }

// this is the same as:
threeObj.apply(null, myThree);
// => { a: 'foo', b: 'bar', c: 'baz' }

// ...which is still the same as:
threeObj(myThree[0], myThree[1], myThree[2]);
// => { a: 'foo', b: 'bar', c: 'baz' }