/**
 * Performs a binary search on a sorted array to find a target value.
 * This function iteratively divides the search range in half.
 *
 * Algorithm used: Binary Search
 *
 * Time complexity - O(log n) - logarithmic
 * Space complexity - O(1) - constant
 *
 * @param {Array} array - The sorted input array to search
 * @param {*} val - The value to search for
 * @returns {number} - The index of the value if found, -1 otherwise
 */
function binarySearch(array, val) {
    // Handle edge cases
    if (!array || !array.length) return -1;
    if (val === undefined || val === null) return -1;
    
    // Initialize pointers for binary search
    let left = 0;
    let right = array.length - 1;
    
    // Continue until search range is valid
    while (left <= right) {
      // Find middle index
      const middle = Math.floor((left + right) / 2);
      
      // If target is found, return its index
      if (array[middle] === val) {
        return middle;
      } 
      // If target is less than middle element, search left half
      else if (array[middle] > val) {
        right = middle - 1;
      } 
      // If target is greater than middle element, search right half
      else {
        left = middle + 1;
      }
    }
    
    // Target not found
    return -1;
  }
  
  function test(array, val, expected) {
    const actual = binarySearch(array, val);
    const res = `${actual === expected ? "✅ passed" : "🆘 failed"}`;
    
    console.log(
      `Test with [${array}], val=${val}: ${res} (got ${actual}, expected ${expected})`
    );
  }
  
  // Test cases
  test([1, 2, 3, 4, 5], 2, 1);
  test([1, 2, 3, 4, 5], 3, 2);
  test([1, 2, 3, 4, 5], 5, 4);
  test([1, 2, 3, 4, 5], 6, -1);
  test([], 1, -1);
  test([1, 2, 3, 4, 5], null, -1);