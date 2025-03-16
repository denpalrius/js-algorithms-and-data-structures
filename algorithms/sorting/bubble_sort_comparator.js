/**
 * Sorts an array using the bubble sort algorithm.
 * Accepts an optional comparator function to determine the sort order.
 *
 * Algorithm used: Bubble Sort
 *
 * Time complexity - O(n²) - quadratic in worst case
 *                   O(n) - linear in best case (already sorted array)
 * Space complexity - O(1) - constant (sorts in place)
 *
 * @param {Array} arr - The array to be sorted
 * @param {Function} [comparator] - Optional function to determine sort order
 * @returns {Array} - The sorted array
 */
function bubbleSort(arr, comparator) {
  if (typeof comparator !== "function") {
    comparator = (a, b) => a - b; // Default comparator for numbers
  }

  let swapped;
  for (let i = arr.length - 1; i > 0; i--) {
    swapped = false;
    for (let j = 0; j < i; j++) {
      if (comparator(arr[j], arr[j + 1]) > 0) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }

  return arr;
}

function test(arr, comparator, expected, description) {
  const arrCopy = JSON.parse(JSON.stringify(arr)); // Deep copy for display
  const actual = bubbleSort([...arrCopy], comparator); // Copy for sorting
  let isPassed = true;

  if (expected) {
    isPassed = JSON.stringify(actual) === JSON.stringify(expected);
  }

  const res = isPassed ? "✅ passed" : "🆘 failed";
  console.log(`Test case (${description}): ${res}`);

  if (!isPassed && expected) {
    console.log(`  Expected: ${JSON.stringify(expected)}`);
    console.log(`  Actual: ${JSON.stringify(actual)}`);
  }

  return actual; // Return for demonstration
}

// Basic number sorting
console.log(
  test(
    [4, 20, 12, 10, 7, 9],
    undefined,
    [4, 7, 9, 10, 12, 20],
    "Basic number array"
  )
);

// Sorting with negative numbers
console.log(
  test([0, -10, 7, 4], undefined, [-10, 0, 4, 7], "With negative numbers")
);

// Already sorted array
console.log(test([1, 2, 3], undefined, [1, 2, 3], "Already sorted"));

// Empty array
console.log(test([], undefined, [], "Empty array"));

// Larger array with duplicates
var nums = [
  4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342,
  32,
];
console.log(test(nums, undefined, null, "Large array with duplicates"));

// String comparison using custom comparator
var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];

function strComp(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;
}

console.log(
  test(
    kitties,
    strComp,
    ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"],
    "String comparison"
  )
);

// Object sorting by property using custom comparator
var moarKittyData = [
  {
    name: "LilBub",
    age: 7,
  },
  {
    name: "Garfield",
    age: 40,
  },
  {
    name: "Heathcliff",
    age: 45,
  },
  {
    name: "Blue",
    age: 1,
  },
  {
    name: "Grumpy",
    age: 6,
  },
];

function oldestToYoungest(a, b) {
  return b.age - a.age;
}

console.log(
  test(
    moarKittyData,
    oldestToYoungest,
    null,
    "Object sorting by age (descending)"
  )
);
