// Time complexity - O(n)
// Space complexity - O(1)

function maxSubArraySum(array, n) {
  if (!array || array.length < n) return null;

  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < n; i++) {
    maxSum += array[i];
  }

  tempSum = maxSum;

  for (let i = n; i < array.length; i++) {
    tempSum = tempSum - array[i - n] + array[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

console.log("10:", maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2));
console.log("17:", maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4));
console.log("6:", maxSubArraySum([4, 2, 1, 6], 1));
console.log("13:", maxSubArraySum([4, 2, 1, 6, 2], 4));
console.log("8:", maxSubArraySum([-3, -4, 2, 1, 6, 2], 2));
console.log("9:", maxSubArraySum([3, 4, 2, 1, 6, 2], 3));
console.log("-7:", maxSubArraySum([-3, -4, -2, -1, -6, -2], 3));
console.log("null:", maxSubArraySum([], 4));
console.log("null:", maxSubArraySum(null, 4));
