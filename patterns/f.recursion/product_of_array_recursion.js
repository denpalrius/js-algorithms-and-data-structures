/**
 * Calculates the product of all numbers in an array.
 * This function uses recursion to multiply each element.
 *
 * Algorithm used: Recursion
 *
 * Time complexity - O(n²) - quadratic (due to slice operation)
 * Space complexity - O(n) - linear (due to recursion stack)
 *
 * @param {number[]} array - The input array of numbers
 * @returns {number} - The product of all numbers in the array
 */
function productOfArray(array) {
  // Base cases
  if (!array || array.length < 1) return 1;
  if (array.length === 1) return array[0];
  
  // Recursive case: multiply first element with product of remaining elements
  return array[0] * productOfArray(array.slice(1));
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