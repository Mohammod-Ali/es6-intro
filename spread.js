const max = Math.max(343, 342,534,4564)
// console.log(max)

const numbers = [23, 32, 43 ,45, 22, 65]
const largest = Math.max(...numbers)
// console.log(largest);

const numbers2 = [...numbers, 999];
numbers.push(33)
numbers2.push(44)
console.log(numbers)
console.log(numbers2)