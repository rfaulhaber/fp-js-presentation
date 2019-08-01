const objects = [
    // remember that months in JavaScript dates are zero-indexed!
    { id: '1', name: 'Ryan', birthday: new Date(1992, 11, 27) },
    { id: '2', name: 'Bob', birthday: new Date(1995, 4, 18) },
    { id: '3', name: 'Alice', birthday: new Date(1989, 0, 1) }
];

// note the destructuring syntax! we're just plucking the 'birthday' field!
const age = ({ birthday }) => new Date().getFullYear() - birthday.getFullYear();

const isCapricorn = obj => {
    const { birthday } = obj;
    const month = birthday.getMonth();
    const day = birthday.getDate();

    return (month === 11 && day >= 22) || (month === 0 && day <= 20);
};

// equivalent to:
// function objToId(obj) {
// 	return obj.id;
// }
const ids = objects.map(obj => obj.id);
console.log(ids);

const ages = objects.map(age);
console.log(ages);

const capricorns = objects.filter(isCapricorn).map(obj => obj.name);
console.log(capricorns);
