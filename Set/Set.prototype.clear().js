var mySet = new Set();
console.log(mySet.add(1));
console.log(mySet.add("foo"));

console.log(mySet.size);       // 2
console.log(mySet.has("foo")); // true

console.log(mySet.clear());

console.log(mySet.size);       // 0
console.log(mySet.has("bar"));  // false