/**
 * Finds the first pair of numbers in an array that sum to zero.
 * This function uses a hash map to store previously seen values.
 *
 * Algorithm used: Hash map lookup
 *
 * Time complexity - O(n) - linear
 * Space complexity - O(n) - linear
 * 
 * @param {number[]} arr - The input array of numbers
 * @returns {number[]|undefined} - Pair that sums to zero or undefined if not found
 */
function sumZero(arr) {
  if (!arr || arr.length === 0) {
    return undefined;
  }

  let pair;
  let lookup = new Map(); // keep track of previous values: value -> index
  
  for (let i = 0; i < arr.length; i++) {
    const zeroSumComplement = -arr[i]; // The value that would sum to zero with current value
    
    if (lookup.has(zeroSumComplement)) {
      // Found a complement in our lookup map
      pair = [zeroSumComplement, arr[i]];
      break;
    } else {
      // Store current value for future lookups
      lookup.set(arr[i], i);
    }
  }

  return pair;
}

function test(arr, expected) {
  const actual = sumZero(arr);
  const actualStr = actual ? `[${actual}]` : "undefined";
  const expectedStr = expected ? `[${expected}]` : "undefined";
  const res = `${JSON.stringify(actual) === JSON.stringify(expected) ? "✅ passed" : "🆘 failed"}`;
  
  // Create a readable array representation for the log
  const arrStr = arr ? `[${arr}]` : "undefined";
  console.log(`Test with ${arrStr}: ${res} (got ${actualStr}, expected ${expectedStr})`);
}

// Running test cases using the test function
test([-4, -3, -2, -1, 0, 1, 2, 5], [-2, 2]);
test([-6, -3, -2, -1, 0, 0, 2, 4, 5], [0, 0]);
test([-4, -3, 1, 0, 5], undefined);
test([], undefined);
test(undefined, undefined);
test([-10, -9, -8, 1, 0, 0, 2, 4, 5], [0, 0]);
test([-10, -9, 2, 4, 5, 9], [-9, 9]);