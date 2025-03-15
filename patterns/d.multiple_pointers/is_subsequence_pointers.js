/**
 * Checks if the first string is a subsequence of the second string.
 * Uses a two-pointer approach to track positions in both strings.
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

  let aPointer = 0; // Pointer for a character in aStr
  let bPointer = 0; // Pointer for a character in bStr

  while (bPointer < bStr.length) {
    // At each character in bStr, check if it is the one in aStr at that pointer
    // If it is, move the aStr pointer forward
    if (aStr[aPointer] === bStr[bPointer]) {
      aPointer++;
    }

    // Check if the aString pointer is at the end of aStr
    // If it is, we've found all characters of aStr in bStr in order
    if (aPointer === aStr.length) {
      return true;
    }

    // Always move bPointer forward to check next character
    bPointer++;
  }

  // Return false if bStr sequence gets to the end without finding all characters
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
