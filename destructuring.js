const fish = {
    name: 'elish',
    age: 2,
    area: 'nodi'
}

const {age, name} = {name: 'Almas', age: '56', profession: 'makeup artist'}
console.log(age);

const {area} = fish
console.log(area)

// Array destructuring
const [first, second] = [22, 44, 32, 55]
console.log(first, second);
