const max = Math.max(23,24, 54, 46, 455);
// console.log(max);
//Spread operator!
const numbers = [23,24, 54, 46, 455];
const largest = Math.max(...numbers);// 3 dots use for spread out
// console.log(largest);
//Spread Array
const numbers2 = [...numbers];
numbers.push(33);
numbers2.push(99);
console.log(numbers);
console.log(numbers2);

const numbers3 = [...numbers];
console.log(numbers3);

const numbers4 = [444, 88, ...numbers, 111];
console.log(numbers4);