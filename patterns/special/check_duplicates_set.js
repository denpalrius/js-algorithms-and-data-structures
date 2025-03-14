/**
 * Checks if there are any duplicate values among the arguments passed.
 * Uses a Set data structure for efficient duplicate detection.
 *
 * Algorithm used: Set data structure
 *
 * Time complexity - O(n) - linear
 * Space complexity - O(n) - linear (not O(1) as commented)
 *
 * @param {...any} params - Any number of arguments to check for duplicates
 * @returns {boolean} - True if any duplicate values exist
 */
function areThereDuplicates(...params) {
  return new Set(params).size !== params.length;
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
test(true, NaN, NaN); // NaN values
test(false, true, false); // Boolean values
