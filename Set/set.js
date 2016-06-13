var mySet = new Set();

console.log(mySet.add(1));
console.log(mySet.add(5));
console.log(mySet.add("some text"));
var o = {a: 1, b: 2};
console.log(mySet.add(o));

console.log(mySet.has(1)); // true
mySet.has(3); // false, 3 has not been added to the set
mySet.has(5);              // true
mySet.has(Math.sqrt(25));  // true
mySet.has("Some Text".toLowerCase()); // true
mySet.has(o); // true

mySet.size; // 4

mySet.delete(5); // removes 5 from the set
mySet.has(5);    // false, 5 has been removed

console.log(mySet.size); // 3, we just removed one value

// iterate over items in set
// logs the items in the order: 1, "some text" 
for (let item of mySet) console.log(item);

// logs the items in the order: 1, "some text" 
for (let item of mySet.keys()) console.log(item);
 
// logs the items in the order: 1, "some text" 
for (let item of mySet.values()) console.log(item);

// logs the items in the order: 1, "some text" 
//(key and value are the same here)
for (let [key, value] of mySet.entries()) console.log(key);

// convert set to plain Array (with Array comprehensions)
//var myArr = [v for (v of mySet)]; // [1, "some text"]
// Alternative (with Array.from)
var myArr = Array.from(mySet); // [1, "some text"]

// the following will also work if run in an HTML document
// mySet.add(document.body);
// mySet.has(document.querySelector("body")); // true

// converting between Set and Array
mySet2 = new Set([1,2,3,4]);
mySet2.size; // 4
[...mySet2]; // [1,2,3,4]

// intersect can be simulated via 
// var intersection = new Set([...set1].filter(x => set2.has(x)));

// difference can be simulated via
// var difference = new Set([...set1].filter(x => !set2.has(x)));

// Iterate set entries with forEach
mySet.forEach(function(value) {
  console.log(value);
});