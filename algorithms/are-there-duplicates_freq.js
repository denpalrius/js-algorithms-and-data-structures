// Time complexity: O(n)
// Space complexity: O(1)

function areThereDuplicates(...params) {
  let collection = {};
  for (let val in params) {
    collection[params[val]] = (collection[params[val]] || 0) + 1;
  }

  for (let key in collection) {
    if (collection[key] > 1) return true;
  }
  return false;
}

// Simple tests
console.log("false:", areThereDuplicates(1, 2, 3));
console.log("true:", areThereDuplicates(2, 1, 2));
console.log("false:", areThereDuplicates(1, 4, 5));
console.log("false:", areThereDuplicates("a", "b", "c"));

// Complex cases
console.log("false:", areThereDuplicates(-20, 20, 10));
console.log("true:", areThereDuplicates("a", "b", "c", "a"));
console.log("false:", areThereDuplicates("a", "aa", "c"));
console.log("true:", areThereDuplicates("a", "cc", "cc", "d"));
