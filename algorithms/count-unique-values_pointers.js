function countuniqueValue(array) {
  if (array.length === 0) return 0;

  let i = 0;

  for (let j = 1; j < array.length; j++) {
    if (array[i] !== array[j]) {
      i++;
      array[i] = array[j];
    }
    // console.log(i, j);
  }

  return i + 1;
}

console.log(countuniqueValue([-2, -2, 1, 2, 3, 4, 4, 4])); // 5
console.log(countuniqueValue([1, 1, 1, 1, 1, 2])); // 2
console.log(countuniqueValue([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countuniqueValue([])); // 0
console.log(countuniqueValue([-2, -1, -1, 0, 1])); // 4
