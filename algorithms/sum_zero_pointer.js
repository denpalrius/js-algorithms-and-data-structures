// Time complexity - O(n)
// Space complexity - O(1)

function sumZero(arr) {
  if (!arr) return;

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

console.log("-2,2:", sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));
console.log("-4,4:", sumZero([-4, -3, 1, 0, 2, 4, 5]));
console.log("undefined:", sumZero([-4, -3, 1, 0, 5]));
console.log("undefined:", sumZero([]));
console.log("undefined:", sumZero());
console.log("0,0:", sumZero([-10, -9, -8, -1, 0, 0, 2, 4, 5]));
console.log("-9,9:", sumZero([-10, -9, 2, 4, 5, 9]));
