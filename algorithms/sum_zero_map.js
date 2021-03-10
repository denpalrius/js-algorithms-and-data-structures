// Time complexity - O(n)
// Space complexity - O(n)

function sumZero(arr) {
  if (!arr) return;

  let pair;
  let lookup = new Map(); // keep track of previous values: complement, index
  for (let i = 0; i < arr.length; i++) {
    const zeroSumComplement = arr[i] * -1;
    if (!lookup.has(zeroSumComplement)) {
      // is current complement a previous value in lookup ?
      lookup.set(arr[i], i); // current value might be complement of future value in array
    } else {
      pair = [zeroSumComplement, arr[i]];
      break;
    }
  }

  return pair;
}

console.log("-2,2:", sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));
console.log("0,0:", sumZero([-6, -3, -2, -1, 0, 0, 2, 4, 5]));
console.log("undefined:", sumZero([-4, -3, 1, 0, 5]));
console.log("undefined:", sumZero([]));
console.log("undefined:", sumZero());
console.log("0,0:", sumZero([-10, -9, -8, 1, 0, 0, 2, 4, 5]));
console.log("-9,9:", sumZero([-10, -9, 2, 4, 5, 9]));
