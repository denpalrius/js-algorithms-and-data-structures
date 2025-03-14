/**
 * Finds the maximum sum of n consecutive elements in an array.
 * Uses slice and reduce for cleaner code but still O(n²) complexity.
 *
 * Algorithm used: Brute force with array methods
 *
 * Time complexity - O(n²) - quadratic
 * Space complexity - O(n) - linear (due to slice creating new arrays)
 *
 * @param {number[]} array - The input array of numbers
 * @param {number} n - The number of consecutive elements to sum
 * @returns {number|null} - Maximum sum or null if invalid input
 */
function maxSubArraySum(array, n) {
  if (!array || array.length < n) {
    return null;
  }

  let maxSum = -Infinity;

  for (let i = 0; i < array.length - n + 1; i++) {
    const subArray = array.slice(i, i + n);
    const sum = subArray.reduce((a, b) => a + b);

    if (sum > maxSum) {
      maxSum = sum;
    }
  }

  return maxSum;
}

function test(array, n, expected) {
  const actual = maxSubArraySum(array, n);
  const res = `${actual === expected ? "✅ passed" : "🆘 failed"}`;

  // Create a readable array representation for the log
  const arrayStr = array ? `[${array}]` : "null";
  console.log(
    `Test with ${arrayStr}, n=${n}: ${res} (got ${actual}, expected ${expected})`
  );
}

// Running test cases using the test function
test([1, 2, 5, 2, 8, 1, 5], 2, 10);
test([1, 2, 5, 2, 8, 1, 5], 4, 17);
test([4, 2, 1, 6], 1, 6);
test([4, 2, 1, 6, 2], 4, 13);
test([-3, -4, 2, 1, 6, 2], 2, 8);
test([3, 4, 2, 1, 6, 2], 3, 9);
test([-3, -4, -2, -1, -6, -2], 3, -7);
test([], 4, null);
test(null, 4, null);
