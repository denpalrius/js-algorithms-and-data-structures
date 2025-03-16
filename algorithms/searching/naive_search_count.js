/**
 * Searches for a substring within a longer string using a naive approach.
 * This function compares characters one by one at each possible position.
 * Returns all matching indices.
 *
 * Algorithm used: Naive string matching
 *
 * Time complexity - O(n * m) - where n is the length of the long string and m is the length of the short string
 * Space complexity - O(k) - where k is the number of matches found
 *
 * @param {string} long - The longer string to search within
 * @param {string} short - The substring to search for
 * @returns {object} - Object containing whether matches were found and their positions
 */
function naiveSearch(long, short) {
  // Edge cases
  if (short === "") return { found: true, matches: [], message: "Empty string always matches" };
  if (long === "") return { found: false, matches: [], message: "Cannot find in empty string" };
  if (short.length > long.length) return { found: false, matches: [], message: "Substring longer than string" };

  const matches = [];
  let matchCount = 0;

   for (let i = 0; i <= long.length - short.length; i++) {
    let hasMatch = true;
    
    // For debugging
    // console.log(`Checking position ${i}: "${long.substring(i, i + short.length)}"`);

    // Compare each character of the substring
    for (let j = 0; j < short.length; j++) {
      const longChar = long[i + j];
      const shortChar = short[j];
      
      // For debugging
      // console.log(`  Comparing: ${longChar} vs ${shortChar}`);
      
      if (longChar !== shortChar) {
        hasMatch = false;
        break; // Early exit once we know it's not a match
      }
    }

    // If we found a match, record its position
    if (hasMatch) {
      matchCount++;
      matches.push(i);
    }
  }

  return { 
    found: matchCount > 0, 
    matches: matches, 
    count: matchCount,
    message: matchCount > 0 ? `Found ${matchCount} matches` : "No matches found"
  };
}

function test(long, short, expectedFound) {
  const result = naiveSearch(long, short);
  const actual = result.found;
  const res = `${actual === expectedFound ? "✅ passed" : "🆘 failed"}`;

  console.log(`Test case ('${long}','${short}'): ${res} (got ${actual}, expected ${expectedFound})`);
  console.log(`  Details: ${result.message}, Positions: [${result.matches}]`);
}

// Test cases
test("lorie ltoledlol", "lol", true);

// Edge cases
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