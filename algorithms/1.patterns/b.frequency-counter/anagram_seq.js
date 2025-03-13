/**
 * Checks whether the first word is an anagram of the second word.
 * This function makes use of a frequency counter
 * 
 * Algorithm used: Frequency counter
 *
 * Time complexity - O(n)
 *
 * Space complexity - O(1)
 * @param {string} a first word
 * @param {string} b second word
 * @returns {boolean} isAnagram
 */
function anagram(a, b) {
  if (a.length !== b.length) {
    return false;
  }
  const aFreq = {};
  const bFreq = {};

  for (const val of a) {
    aFreq[val] = (aFreq[val] || 0) + 1;
  }

  for (const val of b) {
    bFreq[val] = (bFreq[val] || 0) + 1;
  }

  for (const key in aFreq) {
    if (aFreq[key] !== bFreq[key]) {
      return false;
    }
  }

  return true;
}

function test(word1, word2, expected) {
  const actual = anagram(word1, word2);
  const res = `${actual === expected ? "✅ passed" : "🆘 failed"}`;
  console.log(`Test with "${word1}" and "${word2}": ${res}`);
}

// Running test cases using the test function
test("", "", true); // true
test("aaz", "azz", false); // false
test("cinema", "iceman", true); // true
test("anagram", "nagaram", true); // true
test("rat", "car", false); // false
test("awesome", "awesom", false); // false
test("qwerty", "qeywrt", true); // true
test("texttwisttime", "timetwisttext", true); // true