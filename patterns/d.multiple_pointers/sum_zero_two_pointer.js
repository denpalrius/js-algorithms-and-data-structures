/**
 * Finds the first pair of numbers that sum to zero in a sorted array.
 * Algorithm used: Two-pointer approach
 *
 * Time complexity - O(n)
 * Space complexity - O(1)
 * @param {number[]} arr sorted array of numbers
 * @returns {number[] | undefined} first pair summing to zero or undefined if none exists
 */
function sumZero(arr) {
  if (!arr || arr.length === 0) return;

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum < 0) {
      left++;
    } else {
      right--;
    }
  }
}

function test(arr, expected) {
  const actual = sumZero(arr);
  const res = JSON.stringify(actual) === JSON.stringify(expected) ? "✅ passed" : "🆘 failed";
  console.log(`Test with [${arr}]: ${res}`);
}

// Running test cases using the test function
test([-4, -3, -2, -1, 0, 1, 2, 5], [-2, 2]);
test([-4, -3, 1, 0, 2, 4, 5], [-4, 4]);
test([-4, -3, 1, 0, 5], undefined);
test([], undefined);
test(undefined, undefined);
test([-10, -9, -8, 1, 0, 0, 2, 4, 5], [0, 0]);
test([-10, -9, 2, 4, 5, 9], [-9, 9]);
