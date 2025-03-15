/**
 * Checks if the first string is a subsequence of the second string.
 * Uses a recursive approach to check characters one by one.
 *
 * Algorithm used: Recursion
 *
 * Time complexity - O(n) - linear (where n is the length of str2)
 * Space complexity - O(n) - linear (due to recursion stack)
 *
 * @param {string} str1 - The string to check if it's a subsequence
 * @param {string} str2 - The string to check against
 * @returns {boolean} - True if str1 is a subsequence of str2
 */
function isSubsequence(str1, str2) {
  // Base cases
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;
  
  // If first characters match, check the rest of both strings
  if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1));
  
  // If they don't match, check if str1 is a subsequence of the rest of str2
  return isSubsequence(str1, str2.slice(1));
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