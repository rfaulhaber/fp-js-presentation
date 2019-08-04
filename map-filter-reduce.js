const objects = [
    // remember that months in JavaScript dates are zero-indexed!
    { id: '1', name: 'Ryan', birthday: new Date(1992, 11, 27) },
    { id: '2', name: 'Bob', birthday: new Date(1995, 4, 18) },
    { id: '3', name: 'Alice', birthday: new Date(1989, 0, 1) }
];

const age = obj => new Date().getFullYear() - obj.birthday.getFullYear();

const isCapricorn = obj => {
    const { birthday } = obj;
    const month = birthday.getMonth();
    const day = birthday.getDate();

    return (month === 11 && day >= 22) || (month === 0 && day <= 20);
};

const ids = objects.map(obj => obj.id);
console.log(ids); // => [ '1', '2', '3' ]

const ages = objects.map(age);
console.log(ages); // => [ 27, 24, 30 ]

const capricorns = objects.filter(isCapricorn).map(obj => obj.name);
console.log(capricorns); // => [ 'Ryan', 'Alice' ]

const averageAge = ages.reduce((ages, age) => ages + age) / objects.length;
console.log(averageAge); // => 27
