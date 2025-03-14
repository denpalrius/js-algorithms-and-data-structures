/**
* Checks if two numbers have the same frequency of digits.
* Uses a frequency counter pattern to track digit occurrences.
*
* Algorithm used: Frequency counter
*
* Time complexity - O(n) - linear (where n is the number of digits)
* Space complexity - O(1) - constant (limited to 10 possible digits)
* 
* @param {number} a - First number to compare
* @param {number} b - Second number to compare
* @returns {boolean} - True if both numbers have same digit frequency
*/
function sameFrequency(a, b) {
  // Use frequency counter
  // Store counts of a values in a map
  // Store counts of b values in a map
  // Go through map of a and compare equality with map of b
  
  const aChecker = {};
  const bChecker = {};
  
  const aStr = a.toString();
  const bStr = b.toString();
  
  if (aStr.length !== bStr.length) {
    return false;
  }
  
  for (let i = 0; i < aStr.length; i++) {
    aChecker[aStr[i]] = (aChecker[aStr[i]] || 0) + 1;
    bChecker[bStr[i]] = (bChecker[bStr[i]] || 0) + 1;
  }
  
  for (let key in aChecker) {
    if (aChecker[key] !== bChecker[key]) {
      return false;
    }
  }
  
  return true;
 }
 
 function test(a, b, expected) {
  const actual = sameFrequency(a, b);
  const res = `${actual === expected ? "✅ passed" : "🆘 failed"}`;
  
  console.log(`Test with ${a}, ${b}: ${res} (got ${actual}, expected ${expected})`);
 }
 
 // Basic test cases
 test(1828, 2818, true);
 test(34, 14, false);
 test(3589578, 5879385, true);
 test(22, 222, false);
 test(3003, 3003, true);
 
 // Edge cases
 test(0, 0, true);
 test(100, 1, false);
 test(123, 321, true);