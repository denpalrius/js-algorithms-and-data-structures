/**
 * Checks if second array contains squared values of first array (same frequency).
 * This function uses a naive approach with nested loops.
 *
 * Algorithm used: Brute force with nested loops
 *
 * Time complexity - O(n²) - quadratic
 * Space complexity - O(1) - constant (modifies input array)
 *
 * @param {number[]} arr1 - The first input array of numbers
 * @param {number[]} arr2 - The second input array to check for squares
 * @returns {boolean} - True if arr2 contains all squared values of arr1
 */
const sameSquared = (arr1, arr2) => {
  // Check length of both arrays since frequency of elements should be same
  // If not, return false
  if (arr1.length !== arr2.length) {
    return false;
  }

  // Loop through each element in first array to check for square of each element in second array
  // Loop through second array to check if square of element in first array is present
  // If not, return false
  // If present, remove that element from second array
  for (let i = 0; i < arr1.length; i++) {
    let num = arr1[i];
    let square = Math.pow(num, 2);

    let indexToRemove = -1;
    for (let j = 0; j < arr2.length; j++) {
      let potentialSquare = arr2[j];
      if (potentialSquare === square) {
        indexToRemove = j;
        break; // Found match, no need to continue inner loop
      }
    }

    if (indexToRemove < 0) {
      return false;
    }

    arr2.splice(indexToRemove, 1);
  }

  return true;
};

function test(arr1, arr2, expected) {
  // Create copies to avoid modifying original arrays
  const arr1Copy = [...arr1];
  const arr2Copy = [...arr2];

  const actual = sameSquared(arr1Copy, arr2Copy);
  const res = `${actual === expected ? "✅ passed" : "🆘 failed"}`;

  // Create readable array representations for the log
  const arr1Str = `[${arr1}]`;
  const arr2Str = `[${arr2}]`;

  console.log(
    `Test with ${arr1Str}, ${arr2Str}: ${res} (got ${actual}, expected ${expected})`
  );
}

// Test cases
test([1, 2, 3], [4, 1, 9], true);
test([1, 2, 3], [1, 9], false);
test([1, 2, 1], [4, 4, 1], false);
test([1, 2, 1], [4, 1, 1], true);
test([1, 2, 3], [1, 4, 9], true);
test([1, 2, 3], [1, 4, 9, 10], false);
test([3, 2, 1], [1, 4, 9], true);
test([3, 2, 1], [1, 4, 9, 10], false);
