/**
 * Checks if all values in the array appear an even number of times.
 * Uses a frequency counter pattern to track occurrences.
 *
 * Algorithm used: Frequency counter
 *
 * Time complexity - O(n) - linear
 * Space complexity - O(n) - linear (not O(1) as commented)
 * 
 * @param {Array} array - The input array to check
 * @returns {boolean} - True if all values appear an even number of times
 */
function hasAllElementsEvenTimes(array) {
  // Validate input array
  if (!array || !array.length) {
    return false;
  }

  // Create frequency counter object
  const lookup = {};

  // Populate frequency counter with occurrences
  for (let i = 0; i < array.length; i++) {
    const currentElement = array[i];
    lookup[currentElement] = (lookup[currentElement] || 0) + 1;
  }

  // Check if any element appears an odd number of times
  for (const count of Object.values(lookup)) {
    if (count % 2 !== 0) {
      return false;
    }
  }

  // All elements appear an even number of times
  return true;
}

function test(array, expected) {
  const actual = hasAllElementsEvenTimes(array);
  const res = `${actual === expected ? "✅ passed" : "🆘 failed"}`;
  
  // Create a readable array representation for the log
  const arrayStr = array ? `[${array}]` : "null";
  console.log(`Test with ${arrayStr}: ${res} (got ${actual}, expected ${expected})`);
}

// Test cases
test([1, 1, 2, 2, 3, 3], true);
test([1, 1, 2, 2, 3], false);
test([1, 2, 3], false);
test([1, 1], true);
test([], false);
test(null, false);
test([4, 4, 4, 4], true);
test(["a", "a", "b", "b"], true);
test(["a", "a", "b", "b", "c"], false);