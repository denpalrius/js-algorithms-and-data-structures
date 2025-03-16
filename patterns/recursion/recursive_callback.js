/**
 * Checks if at least one element in the array satisfies the callback function.
 * This function recursively tests each element with the callback.
 *
 * Algorithm used: Recursion with index tracking
 *
 * Time complexity - O(n) - linear (worst case checks all elements)
 * Space complexity - O(n) - linear (due to recursion stack)
 *
 * @param {Array} arr - The input array to check
 * @param {Function} callback - Function that tests each element
 * @param {number} [index=0] - Current index (used internally for recursion)
 * @returns {boolean} - True if any element passes the callback test
 */
function someRecursive(arr, callback, index = 0) {
  // Base case: reached end of array, no elements satisfied the callback
  if (index >= arr.length) {
    return false;
  }

  // If current element satisfies callback, return true
  if (callback(arr[index])) {
    return true;
  }

  // Continue checking with the next element
  return someRecursive(arr, callback, index + 1);
}

function test(arr, callback, expected) {
  const actual = someRecursive(arr, callback);
  const res = `${actual === expected ? "✅ passed" : "🆘 failed"}`;

  console.log(
    `Test with [${arr}]: ${res} (got ${actual}, expected ${expected})`
  );
}

// Test cases with isOdd callback
const isOdd = (val) => val % 2 !== 0;
test([1, 2, 3, 4], isOdd, true);
test([4, 6, 8, 9], isOdd, true);
test([4, 6, 8], isOdd, false);

// Test case with greater than 10 callback
test([4, 6, 8], (val) => val > 10, false);
test([4, 6, 12], (val) => val > 10, true);

// Edge cases
test([], isOdd, false);
test([2], isOdd, false);
test([1], isOdd, true);
