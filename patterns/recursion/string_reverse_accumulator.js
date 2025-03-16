/**
 * Reverses a string using recursion with accumulator pattern.
 * This approach avoids quadratic complexity by using an accumulator.
 *
 * Algorithm used: Tail recursion with accumulator
 *
 * Time complexity - O(n) - linear
 * Space complexity - O(n) - linear (due to recursion stack)
 *
 * @param {string} str - The input string to reverse
 * @param {string} [result=''] - Accumulator for the reversed string (used internally)
 * @returns {string} - The reversed string
 */
function reverse(str, result = "") {
  // Base case: empty string
  if (str.length === 0) return result;

  // Take the first character and add it to the result (at the beginning)
  const firstChar = str[0];
  const remaining = str.substring(1);

  // Recursive call with updated arguments
  return reverse(remaining, firstChar + result);
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
