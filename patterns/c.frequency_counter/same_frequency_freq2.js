/**
 * Checks if two numbers have the same frequency of digits.
 * Uses a frequency counter pattern to track digit occurrences.
 *
 * Algorithm used: Frequency counter
 *
 * Time complexity - O(n) - linear (where n is the number of digits)
 * Space complexity - O(1) - constant (limited to 10 possible digits)
 *
 * @param {number} a - First number to compare
 * @param {number} b - Second number to compare
 * @returns {boolean} - True if both numbers have same digit frequency
 */
function sameFrequency(a, b) {
  // Check validity
  if (a === null || b === null) {
    return false;
  }

  // Parse using Number(val) and get String representation
  const aStr = a.toString();
  const bStr = b.toString();

  // Validate length equality
  if (aStr.length !== bStr.length) {
    return false;
  }

  // Count frequencies
  const aCount = new Map();
  const bCount = new Map();

  for (let i = 0; i < aStr.length; i++) {
    // Record the frequencies of the first number string
    const aVal = aStr[i];
    if (aCount.get(aVal)) {
      aCount.set(aVal, aCount.get(aVal) + 1);
    } else {
      aCount.set(aVal, 1);
    }

    // Record the frequencies of the second number string
    const bVal = bStr[i];
    if (bCount.get(bVal)) {
      bCount.set(bVal, bCount.get(bVal) + 1);
    } else {
      bCount.set(bVal, 1);
    }
  }

  // Check for frequency equality using both maps
  for (const [key, val] of aCount.entries()) {
    if (val !== bCount.get(key)) {
      return false;
    }
  }

  return true;
}

function test(a, b, expected) {
  const actual = sameFrequency(a, b);
  const res = `${actual === expected ? "✅ passed" : "🆘 failed"}`;

  console.log(
    `Test with ${a}, ${b}: ${res} (got ${actual}, expected ${expected})`
  );
}

// Basic test cases
test(1828, 2818, true);
test(34, 14, false);
test(3589578, 5879385, true);
test(22, 222, false);
test(3003, 3003, true);

// Edge cases
test(20, 2, false);
test(300, 3, false); // Note: 003 as a number is just 3
test(0, 0, true);
test(1, 10, false);
test(123, 321, true);
