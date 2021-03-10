function countuniqueValue(sortedArray) {
  const lookup = {};
  let count = 0;

  for (const val of sortedArray) {
    if (!lookup[val]) {
      lookup[val] = true;
      count += 1;
    }
  }
  return count;
}

console.log(countuniqueValue([-2, -2, 1, 2, 3, 4, 4, 4])); // 5
console.log(countuniqueValue([1, 1, 1, 1, 1, 2])); // 2
console.log(countuniqueValue([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countuniqueValue([])); // 0
console.log(countuniqueValue([-2, -1, -1, 0, 1])); // 4
