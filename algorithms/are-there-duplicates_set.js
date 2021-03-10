// Time complexity: O(n)
// Space complexity: O(1)

function areThereDuplicates(...params) {
  return new Set(params).size !== params.length;
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
