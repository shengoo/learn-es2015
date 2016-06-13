// import nums from '../data/array.js';
// System.import('../data/array').then(function name(params) {
//   console.log(params)
// })
var nums = require('../data/array_numbers');
var fives = [];

nums.forEach(v => {
  if (v % 5 === 0)
    fives.push(v);
});

console.log(fives);

