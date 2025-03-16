/**
 * Calculates the product of all numbers in an array.
 * This function uses recursion with an index parameter to avoid array slicing.
 *
 * Algorithm used: Recursion with index tracking
 *
 * Time complexity - O(n) - linear
 * Space complexity - O(n) - linear (due to recursion stack)
 *
 * @param {number[]} array - The input array of numbers
 * @param {number} [index=0] - The current index (used internally for recursion)
 * @returns {number} - The product of all numbers in the array
 */
function productOfArray(array, index = 0) {
  // Base cases
  if (!array || array.length === 0) return 1;
  if (index === array.length) return 1;
  if (index === array.length - 1) return array[index];
  
  // Recursive case: multiply current element with product of remaining elements
  return array[index] * productOfArray(array, index + 1);
}

function test(arr, expected) {
  const actual = productOfArray(arr);
  const res = `${actual === expected ? "✅ passed" : "🆘 failed"}`;

  // Create a readable array representation for the log
  const arrStr = arr ? `[${arr}]` : "[]";
  console.log(
    `Test with ${arrStr}: ${res} (got ${actual}, expected ${expected})`
  );
}

// Test cases
test([1, 2, 3], 6);
test([1, 2, 3, 10], 60);
test([], 1);
test([5], 5);