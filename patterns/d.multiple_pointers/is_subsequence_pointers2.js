/**
 * Checks if the first string is a subsequence of the second string.
 * Uses an alternative two-pointer approach.
 *
 * Algorithm used: Two pointers
 *
 * Time complexity - O(n) - linear (where n is the length of bStr)
 * Space complexity - O(1) - constant
 *
 * @param {string} aStr - The string to check if it's a subsequence
 * @param {string} bStr - The string to check against
 * @returns {boolean} - True if aStr is a subsequence of bStr
 */
function isSubsequence(aStr, bStr) {
  // Edge cases
  if (aStr.length === 0) return true;
  if (bStr.length === 0) return false;

  let aPointer = 0;

  // Loop through bStr once
  for (let bPointer = 0; bPointer < bStr.length; bPointer++) {
    // If we find a character match, advance aPointer
    if (aStr[aPointer] === bStr[bPointer]) {
      aPointer++;
    }

    // If we've found all characters in aStr
    if (aPointer === aStr.length) {
      return true;
    }
  }

  // If we've gone through all of bStr without finding all characters
  return false;
}

function test(aStr, bStr, expected) {
  const actual = isSubsequence(aStr, bStr);
  const res = `${actual === expected ? "✅ passed" : "🆘 failed"}`;

  console.log(
    `Test with "${aStr}", "${bStr}": ${res} (got ${actual}, expected ${expected})`
  );
}

// Test cases
test("hello", "hello world", true);
test("sing", "sting", true);
test("abc", "abracadabra", true);
test("aaa", "Madam, I'm Adam", true);
test("abc", "acb", false);
test("", "abc", true);
test("abc", "", false);
test("abcd", "abc", false);
