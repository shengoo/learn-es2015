const numbers = require('../data/array_numbers');
const max = Math.max(...numbers);
console.log(max); // 10


const numbersArray1 = [3, 4, 5, 7, 8];
const numbersArray2 = [9, 6, 10, 11];
const concatArray = [...numbersArray1, ...numbersArray2];
console.log(concatArray); // [3, 4, 5, 7, 8, 9, 6, 10, 11]


const add = function(...numbers) {
  return numbers.reduce((a, b) => a + b);
};
console.log(add(2, 3, 4, 5, 6, 7));
console.log(add(...numbers));