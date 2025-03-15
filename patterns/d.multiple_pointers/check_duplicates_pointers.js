/**
 * Checks if there are any duplicate values among the arguments passed.
 * Uses a multiple pointer approach after sorting the arguments.
 *
 * Algorithm used: Multiple pointers
 *
 * Time complexity - O(n log n) - dominated by the sort operation
 * Space complexity - O(1) - constant (excluding the input array)
 *
 * @param {...any} params - Any number of arguments to check for duplicates
 * @returns {boolean} - True if any duplicate values exist
 */
function areThereDuplicates(...params) {
  // To use the multiple pointer pattern it needs to be sorted
  params.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });

  // Look for adjacent equal values
  for (let i = 0; i < params.length - 1; i++) {
    if (params[i] === params[i + 1]) return true;
  }
  return false;
}

function test(expected, ...args) {
  const actual = areThereDuplicates(...args);
  const res = `${actual === expected ? "✅ passed" : "🆘 failed"}`;

  // Create a readable arguments representation for the log
  const argsStr = args
    .map((arg) => (typeof arg === "string" ? `"${arg}"` : arg))
    .join(", ");
  console.log(
    `Test with (${argsStr}): ${res} (got ${actual}, expected ${expected})`
  );
}

// Simple test cases
test(false, 1, 2, 3);
test(true, 2, 1, 2);
test(false, 1, 4, 5);
test(false, "a", "b", "c");

// Complex test cases
test(false, -20, 20, 10);
test(true, "a", "b", "c", "a");
test(false, "a", "aa", "c");
test(true, "a", "cc", "cc", "d");

// Edge cases
test(false); // No arguments
test(false, 42); // Single argument
test(true, null, undefined, null); // Null and undefined
// test(true, NaN, NaN); // NaN values
test(false, true, false); // Boolean values
