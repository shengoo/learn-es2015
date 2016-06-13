var myArray = ["value1", "value2", "value3"];

// Use the regular Set constructor to transform an Array into a Set
var mySet = new Set(myArray);

mySet.has("value1"); // returns true

// Use the spread operator to transform a set into an Array.
// Will show you exactly the same Array as myArray
console.log(...mySet); //value1 value2 value3
console.log([...mySet]); //[ 'value1', 'value2', 'value3' ]
console.log(mySet); //Set { 'value1', 'value2', 'value3' }