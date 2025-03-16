/**
 * Sorts an array using the bubble sort algorithm.
 * Bubble sort repeatedly steps through the list, compares adjacent elements,
 * and swaps them if they are in the wrong order.
 *
 * Algorithm used: Bubble Sort
 *
 * Time complexity - O(n²) - quadratic in worst case
 *                   O(n) - linear in best case (already sorted array)
 * Space complexity - O(1) - constant (sorts in place)
 *
 * @param {Array} array - The array to be sorted
 * @returns {Array} - The sorted array
 */
function bubbleSort(array) {
  let swapped;
  for (let i = array.length - 1; i > 0; i--) {
    swapped = false;
    for (let j = 0; j < i; j++) {
    //   console.log(i, array, array[j], array[j + 1]);
      if (array[j] > array[j + 1]) {
        [array[j + 1], array[j]] = [array[j], array[j + 1]];
        swapped = true;
      }
    }
    if (!swapped) {
      break; // Terminate if no swaps were made
    }
  }
  return array;
}

function test(input, expected) {
  const inputCopy = [...input]; // Create a copy for display
  const actual = bubbleSort([...input]); // Create another copy for sorting
  const res = `${
    JSON.stringify(actual) === JSON.stringify(expected)
      ? "✅ passed"
      : "🆘 failed"
  }`;

  console.log(`Test case: ${res}`);
  console.log(`  Input: [${inputCopy}]`);
  console.log(`  Output: [${actual}]`);
  console.log(`  Expected: [${expected}]`);
}

// Basic test case
test([8, 12, 3, -3, 1, 5], [-3, 1, 3, 5, 8, 12]);

// Already sorted array (best case scenario)
test([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]);

// Reverse sorted (worst case scenario)
test([5, 4, 3, 2, 1], [1, 2, 3, 4, 5]);

// Array with duplicate elements
test([4, 2, 2, 8, 3, 3, 1], [1, 2, 2, 3, 3, 4, 8]);

// Empty array
test([], []);

// Single element array
test([42], [42]);

// Array with negative numbers
test([-5, -10, 0, 7, -22], [-22, -10, -5, 0, 7]);
