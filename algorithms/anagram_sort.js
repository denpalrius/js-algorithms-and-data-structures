/**
 * Checks whether the first word is an anagram of the second word.
 * This function utilises  the javascript array sorting.
 * 
 * Time complexity - O(n)
 *
 * Space complexity - O(1)
 * @param {string} s first word
 * @param {string} t second word
 * @returns {boolean} isAnagram
 */
function anagram(s, t) {
  const sSorted = s.split("").sort().join("");
  const tSorted = t.split("").sort().join("");

  return sSorted === tSorted;
}

console.log(`"", "": `, anagram("", "")); //true
console.log('"az", "azz": ', anagram("aaz", "azz")); //false
console.log('"cinema", "iceman": ', anagram("cinema", "iceman")); //false
console.log('"anagram", "nagaram": ', anagram("anagram", "nagaram")); //true
console.log('"rat", "car": ', anagram("rat", "car")); //false
console.log('"awesome", "awesom": ', anagram("awesome", "awesom")); //false
console.log('"qwerty", "qeywrt": ', anagram("qwerty", "qeywrt")); //true
console.log(
  '"texttwisttime", "timetwisttext": ',
  anagram("texttwisttime", "timetwisttext")
); //true
