/**
 * Checks whether the first word is an anagram of the second word.
 * This function makes use of a look up object
 *
 * Time complexity - O(n)
 *
 * Space complexity - O(1)
 * @param {string} s first word
 * @param {string} t second word
 * @returns {boolean} isAnagram
 */
function anagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const lookup = {};

  for (const val of s) {
    lookup[val] ? lookup[val]++ : (lookup[val] = 1);
  }

  for (const val of t) {
    if (!lookup[val]) {
      return false;
    }
    lookup[val]--;
  }

  return true;
}

console.log('"", "":', anagram("", "")); //true
console.log("aaz:azz:", anagram("aaz", "azz")); //false
console.log("cinema:iceman:", anagram("cinema", "iceman")); //false
console.log("anagram:nagaram:", anagram("anagram", "nagaram")); //true
console.log("rat:car:", anagram("rat", "car")); //false
console.log("awesome:awesom:", anagram("awesome", "somawe")); //false
console.log("qwerty:qeywrt:", anagram("qwerty", "qeywrt")); //true
console.log(
  "texttwisttime:timetwisttext:",
  anagram("texttwisttime", "timetwisttext")
); //true
