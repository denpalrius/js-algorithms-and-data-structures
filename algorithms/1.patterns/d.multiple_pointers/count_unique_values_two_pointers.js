/**
 * Counts the number of unique values in a sorted array.
 * This function uses a two-pointer technique to count unique values.
 * Takes advantage of the array being sorted to avoid using additional storage.
 *
 * Algorithm used: Two-pointer technique
 *
 * Time complexity - O(n) - linear
 * Space complexity - O(1) - constant
 *
 * @param {number[]} sortedArray - The input sorted array of numbers
 * @returns {number} - Count of unique values
 */
function countUniqueValues(sortedArray) {
  // Check for null or empty array
  // Initalise counter to store results
  // Use two-poijter approach to check for duplicates

  if (!sortedArray || sortedArray.length === 0) {
    return 0;
  }

  let uniqueCount = 1;

  for (let i = 1; i < sortedArray.length; i++) {
    if (sortedArray[i] !== sortedArray[i - 1]) {
      uniqueCount++;
    }
  }

  return uniqueCount;
}

function test(arr, expected) {
  const actual = countUniqueValues(arr);
  const res = `${actual === expected ? "✅ passed" : "🆘 failed"}`;

  // Create a readable array representation for the log
  const arrStr = arr ? `[${arr}]` : "[]";
  console.log(
    `Test with ${arrStr}: ${res} (got ${actual}, expected ${expected})`
  );
}

// Running test cases using the test function
test([-2, -2, 1, 2, 3, 4, 4, 4], 5);
test([1, 1, 1, 1, 1, 2], 2);
test([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13], 7);
test([], 0);
test([-2, -1, -1, 0, 1], 4);
