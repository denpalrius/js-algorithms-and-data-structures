// Time complexity - O(n2) -quadratic
// Space complexity - O(1)

function sumZero(arr) {
  if (!arr) return;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

console.log("-2,2:", sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));
console.log("-4,4:", sumZero([-4, -3, 1, 0, 2, 4, 5]));
console.log("undefined:", sumZero([-4, -3, 1, 0, 5]));
console.log("undefined:", sumZero([]));
console.log("undefined:", sumZero());
console.log("0,0:", sumZero([-10, -9, -8, 1, 0, 0, 2, 4, 5]));
console.log("-9,9:", sumZero([-10, -9, 2, 4, 5, 9]));
