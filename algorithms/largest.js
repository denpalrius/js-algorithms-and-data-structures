
function findLargest(numbers) {
  let largest = numbers[0];
  const len = numbers.length;

  for (let i = 0; i < len; i++) {
    const currentVal = numbers[i];

    if (currentVal > largest) {
      largest = currentVal;
    }
  }

  return largest;
}
