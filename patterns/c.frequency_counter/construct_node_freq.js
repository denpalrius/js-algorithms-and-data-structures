/**
 * Determines if a message can be constructed using the given letters.
 * Uses frequency counter pattern to track character occurrences.
 *
 * Algorithm used: Frequency counter
 *
 * Time complexity - O(M+N) - where M is message length and N is letters length
 * Space complexity - O(N) - for the frequency counter objects
 *
 * @param {string} message - The message to construct
 * @param {string} letters - The letters available for use
 * @returns {boolean} - True if message can be constructed from letters
 */
function constructNote(message, letters) {
  // Handle empty message case (can always construct an empty message)
  if (message.length === 0) {
    return true;
  }

  // Handle empty letters case (can't construct anything except empty message)
  if (letters.length === 0) {
    return false;
  }

  // Create frequency counters for both strings
  const messageLookup = {};
  const letterLookup = {};

  // Count character frequencies in message
  for (let char of message) {
    messageLookup[char] = (messageLookup[char] || 0) + 1;
  }

  // Count character frequencies in letters
  for (let char of letters) {
    letterLookup[char] = (letterLookup[char] || 0) + 1;
  }

  // Check if we have enough of each character
  for (let key in messageLookup) {
    if (!letterLookup[key] || messageLookup[key] > letterLookup[key]) {
      return false;
    }
  }

  return true;
}

function test(message, letters, expected) {
  const actual = constructNote(message, letters);
  const res = `${actual === expected ? "✅ passed" : "🆘 failed"}`;

  console.log(
    `Test with "${message}", "${letters}": ${res} (got ${actual}, expected ${expected})`
  );
}

// Test case 1: should_account_for_duplicates
test("aa", "abc", false); // Can't make 'aa' from 'abc' (not enough 'a's)
test("aaa", "aab", false); // Not enough 'a's
test("abc", "aabbcc", true); // Enough of each letter

// Test case 2: should_return_true_for_empty_message
test("", "abc", true);
test("", "", true);

// Test case 3: should_return_false_for_empty_letters_string
test("abc", "", false);
test("a", "", false);

// Test case 4: should_return_true_if_all_letters_contained
test("abc", "abcdef", true);
test("abc", "cba", true);
test("hello", "hellothere", true);

// Test case 5: should_handle_large_cases
const largeMessage = "abcdefghijklmnopqrstuvwxyz".repeat(10);
const largeLetters = "abcdefghijklmnopqrstuvwxyz".repeat(20);
test(largeMessage, largeLetters, true);

// Additional edge cases
test("aabbcc", "bcabcaddff", true);
test("hello", "hell", false);
