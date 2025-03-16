/**
 * Reverses a string using recursion.
 * This function takes the last character and adds it to the reversed remaining string.
 *
 * Algorithm used: Recursion
 *
 * Time complexity - O(n²) - quadratic (due to string concatenation and substring operations)
 * Space complexity - O(n) - linear (due to recursion stack)
 *
 * @param {string} str - The input string to reverse
 * @returns {string} - The reversed string
 */
function reverse(str) {
  // Base case: empty string
  if (str.length < 1) return "";

  const lastChar = str.substring(str.length - 1);
  const remaining = str.substring(0, str.length - 1);

  const reversed = lastChar + reverse(remaining);

  return reversed;
}

function test(str, expected) {
  const actual = reverse(str);
  const res = `${actual === expected ? "✅ passed" : "🆘 failed"}`;

  console.log(
    `Test with "${str}": ${res} (got "${actual}", expected "${expected}")`
  );
}

// Test cases
test("awesome", "emosewa");
test("rithmschool", "loohcsmhtir");
test("", "");
test("a", "a");
