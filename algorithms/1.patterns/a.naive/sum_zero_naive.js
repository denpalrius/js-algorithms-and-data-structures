/**
 * Finds the first pair of numbers in a sorted array that sum to zero.
 * This function uses a nested loop approach to check all possible pairs.
 *
 * Algorithm used: Nested loops
 *
 * Time complexity - O(n²) - quadratic
 * Space complexity - O(1)
 * 
 * @param {number[]} arr - The input array of numbers
 * @returns {number[]|undefined} - Pair that sums to zero or undefined if not found
 */
function sumZero(arr) {
  if (!arr || arr.length === 0) {
    return undefined;
  }
  
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
  
  return undefined;
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
test([-4, -3, 1, 0, 2, 4, 5], [-4, 4]);
test([-4, -3, 1, 0, 5], undefined);
test([], undefined);
test(undefined, undefined);
test([-10, -9, -8, 1, 0, 0, 2, 4, 5], [0, 0]);
test([-10, -9, 2, 4, 5, 9], [-9, 9]);