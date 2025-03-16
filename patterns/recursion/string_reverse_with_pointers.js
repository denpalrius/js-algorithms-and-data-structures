/**
 * Reverses a string using recursion with array manipulation.
 * This approach avoids expensive string concatenation operations.
 *
 * Algorithm used: Recursion with array helper
 *
 * Time complexity - O(n) - linear
 * Space complexity - O(n) - linear (due to recursion stack and result array)
 *
 * @param {string} str - The input string to reverse
 * @returns {string} - The reversed string
 */
function reverse(str) {
  // Convert to array for more efficient manipulation
  const chars = str.split('');
  
  // Helper function to reverse the array in-place
  function reverseHelper(start, end) {
    // Base case: when pointers meet or cross
    if (start >= end) return;
    
    // Swap characters at start and end positions
    [chars[start], chars[end]] = [chars[end], chars[start]];
    
    // Recursive call with updated pointers
    reverseHelper(start + 1, end - 1);
  }
  
  // Start recursion with pointers at beginning and end
  reverseHelper(0, chars.length - 1);
  
  // Join the array back into a string
  return chars.join('');
}

function test(str, expected) {
  const actual = reverse(str);
  const res = `${actual === expected ? "✅ passed" : "🆘 failed"}`;

  console.log(`Test with "${str}": ${res} (got "${actual}", expected "${expected}")`);
}

// Test cases
test('awesome', 'emosewa');
test('rithmschool', 'loohcsmhtir');
test('', '');
test('a', 'a');