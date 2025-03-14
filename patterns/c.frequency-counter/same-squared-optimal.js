sameSquared = (arr1, arr2) => {
  // 1. Check if both arrays are the same length
  // 2. Create dictionary to store all squares from the first array
  // 3. Loop across all arr1 values and store the squares in the dictionary
  // 4. Loop through arr2 values and check if the squared value is in the dictionary
  //    - 4a. If the square does not exist or has no remaining count, return false
  //    - 4b. Else, decrement the count in the dictionary
  // 5. Return true if all values are matched

  if (arr1.length !== arr2.length) return false;

  squaredValues = {};

  for (let i = 0; i < arr1.length; i++) {
    square = arr1[i] ** 2;
    squaredValues[square] = (squaredValues[square] || 0) + 1;
  }

  for (let i = 0; i < arr2.length; i++) {
    square = arr2[i];
    if (!squaredValues[square] || squaredValues[square] < 1) {
      return false;
    } else {
      squaredValues[square] -= 1;
    }
  }

  return true;
};

function test(arr1, arr2, expected) {
  const actual = sameSquared(arr1, arr2);
  res = `${actual == expected ? "✅ passed" : "🆘 failed"}`;
  console.log(res);
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
