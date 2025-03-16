/**
 * Searches for a substring within a longer string using a naive approach.
 * This function compares characters one by one at each possible position.
 *
 * Algorithm used: Naive string matching
 *
 * Time complexity - O(n * m) - where n is the length of the long string and m is the length of the short string
 * Space complexity - O(1) - constant
 *
 * @param {string} long - The longer string to search within
 * @param {string} short - The substring to search for
 * @returns {boolean} - True if the substring is found, false otherwise
 */
function naiveSearch(long, short) {
  if (!short) return true;
  if (!short && !long) return true;
  if (short.length > long.length) return false;

  for (let i = 0; i < long.length - short.length + 1; i++) {
    let hasMatch = true;

    for (let j = 0; j < short.length; j++) {
      const longChar = long[i + j];
      const shortChar = short[j];

      if (longChar !== shortChar) {
        hasMatch = false;
      }
    }

    if (hasMatch) return hasMatch;
  }

  return false;
}

function test(long, short, expected) {
  const actual = naiveSearch(long, short);
  const res = `${actual === expected ? "✅ passed" : "🆘 failed"}`;

  console.log(`Test case ('${long}','${short}'): ${res} (got ${actual}, expected ${expected})`);
}

// Test cases
test("lorie ltoledlol", "lol", true);

// Empty strings
test("", "", true);
test("hello", "", true);
test("", "hello", false);

// Simple cases
test("hello world", "hello", true);
test("hello world", "world", true);
test("hello world", "hello world", true);

// No match
test("hello world", "banana", false);

// Case sensitivity
test("Hello World", "hello", false);
test("Hello World", "Hello", true);

// Partial matches
test("helllo", "hello", false);
test("helo", "hello", false);

// Multiple occurrences
test("lol lol lol", "lol", true);

// Match at beginning
test("banana apple", "banana", true);

// Match at end
test("apple banana", "banana", true);
