/**
 * Checks if a string is a palindrome.
 * A palindrome reads the same forward and backward.
 *
 * Algorithm used: Recursion with two pointers
 *
 * Time complexity - O(n) - linear
 * Space complexity - O(n) - linear (due to recursion stack)
 *
 * @param {string} str - The input string to check
 * @returns {boolean} - True if the string is a palindrome, false otherwise
 */
function isPalindrome(str) {
  function helper(start, end) {
    // Base case: when pointers meet or cross, we've checked all characters
    if (start >= end) return true;

    // If characters at both ends don't match, it's not a palindrome
    if (str[start] !== str[end]) return false;

    // Check the rest of the string recursively
    return helper(start + 1, end - 1);
  }

  // Start the recursion with pointers at beginning and end
  return helper(0, str.length - 1);
}

function test(str, expected) {
  const actual = isPalindrome(str);
  const res = `${actual === expected ? "✅ passed" : "🆘 failed"}`;

  console.log(
    `Test with "${str}": ${res} (got ${actual}, expected ${expected})`
  );
}

// Test cases
test("awesome", false);
test("foobar", false);
test("tacocat", true);
test("amanaplanacanalpanama", true);
test("amanaplanacanalpandemonium", false);
test("", true);
test("a", true);
