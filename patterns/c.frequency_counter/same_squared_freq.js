/**
* Checks if second array contains squared values of first array (same frequency).
* This function uses a frequency counter approach for optimal performance.
*
* Algorithm used: Frequency counter
*
* Time complexity - O(n) - linear
* Space complexity - O(n) - linear
* 
* @param {number[]} arr1 - The first input array of numbers
* @param {number[]} arr2 - The second input array to check for squares
* @returns {boolean} - True if arr2 contains all squared values of arr1
*/
const sameSquared = (arr1, arr2) => {
  // 1. Check if both arrays are the same length
  if (arr1.length !== arr2.length) {
    return false;
  }
 
  // 2. Create dictionary to store all squares from the first array
  const squaredValues = {};
 
  // 3. Loop across all arr1 values and store the squares in the dictionary
  for (let i = 0; i < arr1.length; i++) {
    const square = arr1[i] ** 2;
    squaredValues[square] = (squaredValues[square] || 0) + 1;
  }
 
  // 4. Loop through arr2 values and check if the squared value is in the dictionary
  for (let i = 0; i < arr2.length; i++) {
    const value = arr2[i];
    // 4a. If the value does not exist or has no remaining count, return false
    if (!squaredValues[value] || squaredValues[value] < 1) {
      return false;
    // 4b. Else, decrement the count in the dictionary
    } else {
      squaredValues[value] -= 1;
    }
  }
 
  // 5. Return true if all values are matched
  return true;
 };
 
 function test(arr1, arr2, expected) {
  const actual = sameSquared(arr1, arr2);
  const res = `${actual === expected ? "✅ passed" : "🆘 failed"}`;
  
  // Create readable array representations for the log
  const arr1Str = `[${arr1}]`;
  const arr2Str = `[${arr2}]`;
  
  console.log(`Test with ${arr1Str}, ${arr2Str}: ${res} (got ${actual}, expected ${expected})`);
 }
 
 // Test cases
 test([1, 2, 3], [4, 1, 9], true);
 test([1, 2, 3], [1, 9], false);
 test([1, 2, 1], [4, 4, 1], false);
 test([1, 2, 1], [4, 1, 1], true);
 test([1, 2, 3], [1, 4, 9], true);
 test([1, 2, 3], [1, 4, 9, 10], false);
 test([3, 2, 1], [1, 4, 9], true);
 test([3, 2, 1], [1, 4, 9, 10], false);