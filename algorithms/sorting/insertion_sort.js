/**
 * Sorts an array using the selection sort algorithm.
 * Selection sort works by finding the minimum element and putting it at the beginning.
 *
 * Algorithm used: Selection Sort
 *
 * Time complexity - O(n²) - quadratic
 * Space complexity - O(1) - constant (sorts in place)
 *
 * @param {Array} arr - The array to be sorted
 * @param {Function} [comparator] - Optional function to determine sort order
 * @returns {Array} - The sorted array
 */
function selectionSort(arr, comparator) {
  // Default comparator for numbers if none provided
  if (typeof comparator !== "function") {
    comparator = (a, b) => a - b;
  }

  const len = arr.length;

  for (let i = 0; i < len; i++) {
    // Assume the current position has the minimum value
    let minIndex = i;

    // Find the minimum value in the rest of the array
    for (let j = i + 1; j < len; j++) {
      // Compare the current minimum with the current element
      if (comparator(arr[j], arr[minIndex]) < 0) {
        // Update the minimum index if we found a smaller element
        minIndex = j;
      }
    }

    // Only swap if we found a new minimum
    if (minIndex !== i) {
      // Swap the found minimum with the current position
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
}

/**
 * Tests the selectionSort function with various inputs and validates the results.
 *
 * @param {Array} input - The input array to sort
 * @param {Function} [comparator] - Optional comparator function
 * @param {Array} expected - The expected result after sorting
 * @param {string} description - Description of the test case
 * @returns {boolean} - Whether the test passed
 */
function testSelectionSort(input, expected, comparator, description) {
  // Make a copy of the input to avoid modifying the original
  const inputCopy = JSON.parse(JSON.stringify(input));

  // Sort the copy
  const actual = selectionSort([...inputCopy], comparator);

  // Check if result matches expected
  const isPassed = JSON.stringify(actual) === JSON.stringify(expected);

  // Display test result
  const result = isPassed ? "✅ PASSED" : "❌ FAILED";
  console.log(`${result}: ${description}`);

  if (!isPassed) {
    console.log(`  Input:    ${JSON.stringify(inputCopy)}`);
    console.log(`  Expected: ${JSON.stringify(expected)}`);
    console.log(`  Actual:   ${JSON.stringify(actual)}`);
  }

  return isPassed;
}

// Run the tests
function runTests() {
  let passedCount = 0;
  let totalTests = 0;

  // Test 1: Sort numbers in ascending order
  totalTests++;
  if (
    testSelectionSort(
      [4, 20, 12, 10, 7, 9],
      [4, 7, 9, 10, 12, 20],
      undefined,
      "Sort numbers in ascending order"
    )
  )
    passedCount++;

  // Test 2: Sort with negative numbers
  totalTests++;
  if (
    testSelectionSort(
      [0, -10, 7, 4],
      [-10, 0, 4, 7],
      undefined,
      "Sort with negative numbers"
    )
  )
    passedCount++;

  // Test 3: Sort already sorted array
  totalTests++;
  if (
    testSelectionSort(
      [1, 2, 3],
      [1, 2, 3],
      undefined,
      "Sort already sorted array"
    )
  )
    passedCount++;

  // Test 4: Sort empty array
  totalTests++;
  if (testSelectionSort([], [], undefined, "Sort empty array")) passedCount++;

  // Test 5: Sort large array with duplicates
  const nums = [
    4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67,
    4342, 32,
  ];
  const expectedNums = [
    2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546,
    4342,
  ];
  totalTests++;
  if (
    testSelectionSort(
      nums,
      expectedNums,
      undefined,
      "Sort large array with duplicates"
    )
  )
    passedCount++;

  // Test 6: Sort strings with custom comparator
  const kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
  const strComp = (a, b) => {
    if (a < b) return -1;
    else if (a > b) return 1;
    return 0;
  };
  totalTests++;
  if (
    testSelectionSort(
      kitties,
      ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"],
      strComp,
      "Sort strings with custom comparator"
    )
  )
    passedCount++;

  // Test 7: Sort objects with custom comparator
  const moarKittyData = [
    { name: "LilBub", age: 7 },
    { name: "Garfield", age: 40 },
    { name: "Heathcliff", age: 45 },
    { name: "Blue", age: 1 },
    { name: "Grumpy", age: 6 },
  ];
  const oldestToYoungest = (a, b) => b.age - a.age;
  const expectedKittyOrder = [
    { name: "Heathcliff", age: 45 },
    { name: "Garfield", age: 40 },
    { name: "LilBub", age: 7 },
    { name: "Grumpy", age: 6 },
    { name: "Blue", age: 1 },
  ];
  totalTests++;
  if (
    testSelectionSort(
      moarKittyData,
      expectedKittyOrder,
      oldestToYoungest,
      "Sort objects by age in descending order"
    )
  )
    passedCount++;

  // Summary
  console.log(`\nTest Summary: ${passedCount} of ${totalTests} tests passed.`);
}

// Run all tests
runTests();
