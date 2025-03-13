// Naive
sameSquared = (arr1, arr2) => {
  // Check length of both arrays since frequency of elements should be same
  // If not, return false

  // Loop through each element in first array to check for square of each element in second array
  // Loop through second array to check if square of element in first array is present
  // If not, return false
  // If present, remove that element from second array

  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    num = arr1[i];
    square = Math.pow(num, 2);

    indexToRemove = -1;
    for (let j = 0; j < arr2.length; j++) {
      potentialSquare = arr2[j];
      if (potentialSquare === square) {
        indexToRemove = j;
        continue;
      }
    }

    if (indexToRemove < 0) {
      return false;
    }

    arr2.splice(indexToRemove, 1);
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
