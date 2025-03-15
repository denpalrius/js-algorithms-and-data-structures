/**
 * Determines if there is a pair of values in the array where the average equals the target.
 * Uses a two-pointer approach assuming the array is sorted.
 *
 * Algorithm used: Two pointers
 *
 * Time complexity - O(n) - linear
 * Space complexity - O(1) - constant
 *
 * @param {number[]} numList - The sorted array of numbers
 * @param {number} target - The target average value
 * @returns {boolean} - True if a pair with the target average exists
 */
function averagePair(numList, target) {
  if (!numList || numList.length < 2 || target === undefined) {
    return false;
  }

  // Two pointer approach
  let left = 0;
  let right = numList.length - 1;

  while (left < right) {
    const average = (numList[left] + numList[right]) / 2;

    if (average === target) {
      return true;
    } else if (average < target) {
      // Need a higher average, move left pointer up
      left++;
    } else {
      // Need a lower average, move right pointer down
      right--;
    }
  }

  return false;
}

function test(numList, target, expected) {
  const actual = averagePair(numList, target);
  const res = `${actual === expected ? "✅ passed" : "🆘 failed"}`;

  // Create a readable array representation for the log
  const arrayStr = numList ? `[${numList}]` : "null";
  console.log(
    `Test with ${arrayStr}, target=${target}: ${res} (got ${actual}, expected ${expected})`
  );
}

// Test cases
test([1, 2, 3], 2.5, true);
test([1, 3, 3, 5, 6, 7, 10, 12, 19], 8, true);
test([1, 2, 3], 2, true);
test([-1, 0, 3, 4, 5, 6], 1.5, true);
test([], 4, false);
test([1], 1, false);
test(null, 4, false);
test([1, 2, 3], undefined, false);
