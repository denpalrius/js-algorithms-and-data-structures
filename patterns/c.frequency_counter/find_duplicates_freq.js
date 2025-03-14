/**
* Finds all duplicate values in an array.
* Uses a frequency counter pattern to track seen values.
*
* Algorithm used: Frequency counter
*
* Time complexity - O(n) - linear
* Space complexity - O(n) - linear
* 
* @param {number[]} array - The input array to check for duplicates
* @returns {number[]} - Array containing all duplicate values
*/
function findAllDuplicates(array) {
  if (!array || array.length < 2) {
    return [];
  }
  
  const lookup = {};
  const duplicates = [];
  
  for (let num of array) {
    if (lookup[num]) {
      duplicates.push(num);
    } else {
      lookup[num] = true;
    }
  }
  
  return duplicates;
 }
 
 function test(array, expected) {
  const actual = findAllDuplicates(array);
  // Sort arrays for consistent comparison
  const sortedActual = [...actual].sort((a, b) => a - b);
  const sortedExpected = [...expected].sort((a, b) => a - b);
  
  const isEqual = JSON.stringify(sortedActual) === JSON.stringify(sortedExpected);
  const res = `${isEqual ? "✅ passed" : "🆘 failed"}`;
  
  // Create readable array representations for the log
  const arrayStr = array ? `[${array}]` : "null";
  const actualStr = `[${sortedActual}]`;
  const expectedStr = `[${sortedExpected}]`;
  
  console.log(`Test with ${arrayStr}: ${res} (got ${actualStr}, expected ${expectedStr})`);
 }
 
 // Test cases
 test([1, 2, 3, 4], []);
 test([1, 2, 3, 1, 4, 2], [1, 2]);
 test([4, 3, 2, 7, 8, 2, 3, 1], [2, 3]);
 test([4, 4, 4, 4], [4, 4, 4]);
 test([], []);
 test(null, []);
 test([1, 1, 2, 2, 3, 3], [1, 2, 3]);