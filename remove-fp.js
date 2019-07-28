// the same code as the scheme function
function remove(list, item) {
    if (!list) {
        return [];
    }

    // this is the same as writing:
    // const first = list[0];
    // const rest = list.slice(1);
    const [first, ...rest] = list;

    if (first === item) {
        return rest;
    } else {
        return [first].concat(remove(rest, item));
    }
}

const list = [1, 2, 3, 4];
remove(list, 3); // => [1, 2, 4]
console.log(list); // => [1, 2, 3, 4]
