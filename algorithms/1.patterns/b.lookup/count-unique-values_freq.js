/**
 * Counts the number of unique values in a sorted array.
 * This function uses a hash map to track seen values.
 *
 * Algorithm used: Hash map/object lookup
 *
 * Time complexity - O(n) - linear
 * Space complexity - O(n) - linear
 * 
 * @param {number[]} sortedArray - The input sorted array of numbers
 * @returns {number} - Count of unique values
 */
function countUniqueValues(sortedArray) {
  if (!sortedArray || sortedArray.length === 0) {
    return 0;
  }
  
  const lookup = {};
  let count = 0;

  for (const val of sortedArray) {
    if (!lookup[val]) {
      lookup[val] = true;
      count += 1;
    }
  }
  
  return count;
}

function test(arr, expected) {
  const actual = countUniqueValues(arr);
  const res = `${actual === expected ? "✅ passed" : "🆘 failed"}`;
  
  // Create a readable array representation for the log
  const arrStr = arr ? `[${arr}]` : "[]";
  console.log(`Test with ${arrStr}: ${res} (got ${actual}, expected ${expected})`);
}

// Running test cases using the test function
test([-2, -2, 1, 2, 3, 4, 4, 4], 5);
test([1, 1, 1, 1, 1, 2], 2);
test([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13], 7);
test([], 0);
test([-2, -1, -1, 0, 1], 4);