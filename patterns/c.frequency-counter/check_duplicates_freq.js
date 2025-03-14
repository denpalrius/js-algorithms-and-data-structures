/**
 * Checks if there are any duplicate values among the arguments passed.
 * Uses a Map to track seen values for optimized lookups.
 *
 * Algorithm used: Hash map
 *
 * Time complexity - O(n) - linear
 * Space complexity - O(n) - linear
 *
 * @param {...any} params - Any number of arguments to check for duplicates
 * @returns {boolean} - True if any duplicate values exist
 */
function areThereDuplicates(...params) {
  // Create map to store seen arguments
  const checker = new Map();

  for (let param of params) {
    // If param exists, return true
    if (checker.get(param)) {
      return true;
    }

    // If param doesn't exist, mark it as seen and continue
    checker.set(param, true);
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
test(true, NaN, NaN); // NaN values
test(false, true, false); // Boolean values
test(true, true, false, false); // Boolean values
test(true, {}, {}); // Different object references (behavior note: these are not detected as duplicates)
