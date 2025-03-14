/**
 * Searches for an integer value equal to its index position in an array.
 * Uses a divide and conquer (binary search) approach for efficiency.
 *
 * Algorithm used: Divide and Conquer
 *
 * Time complexity - O(log n) - logarithmic
 * Space complexity - O(1) - constant
 *
 * @param {number[]} array - The input sorted array of numbers
 * @param {number} val - The value to search for
 * @returns {number} - Index where array[index] === val or -1 if not found
 */
function searchInt(array, val) {
  // Set initial search boundaries
  let min = 0;
  let max = array.length - 1;

  // Continue searching while boundaries are valid
  while (min <= max) {
    // Calculate middle index
    let middle = Math.floor((min + max) / 2);

    // Get the value at middle index
    let middleVal = array[middle];

    // Found the target value
    if (middleVal === val) {
      return middle;
      // Target is in right half
    } else if (middleVal < val) {
      min = middle + 1;
      // Target is in left half
    } else {
      max = middle - 1;
    }
  }

  // Value not found
  return -1;
}

function test(array, val, expected) {
  const actual = searchInt(array, val);
  const res = `${actual === expected ? "✅ passed" : "🆘 failed"}`;

  // Create a readable array representation for the log
  const arrayStr = array ? `[${array}]` : "null";
  console.log(
    `Test with ${arrayStr}, val=${val}: ${res} (got ${actual}, expected ${expected})`
  );
}

// Running test cases using the test function
test([1, 2, 3, 4, 5], 4, 3);
test([1, 2, 3, 4, 5], 1, 0);
test([1, 2, 3, 4, 5], 5, 4);
test([10, 20, 30, 40, 50], 30, 2);
test([10, 20, 30, 40, 50], 60, -1);
test([-5, -3, 0, 5, 10, 15], 0, 2);
test([-5, -3, 0, 5, 10, 15], -5, 0);
test([], 5, -1);
test([42], 42, 0);
test([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7, 6);
