var mySet = new Set();
console.log(mySet.add("foo"));

console.log(mySet.delete("bar")); // Returns false. No "bar" element found to be deleted.
console.log(mySet.delete("foo")); // Returns true.  Successfully removed.

console.log(mySet.has("foo"));    // Returns false. The "foo" element is no longer present.