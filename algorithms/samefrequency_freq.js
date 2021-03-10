// Time complex: O(n)
// Method: Frequency counter
function sameFrequency(a, b) {
  // Check validity
  if (!a || !b) return false;

  // Parse using Number(val) and get String representation
  const aStr = Number(a).toString();
  const bStr = Number(b).toString();

  // Validate length equality
  if (aStr.length !== bStr.length) return false;

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
    if (val !== bCount.get(key)) return false;
  }

  return true;
}

// Simple tests
console.log("true:", sameFrequency(1828, 2818));
console.log("false:", sameFrequency(34, 14));
console.log("true:", sameFrequency(3589578, 5879385));
console.log("false:", sameFrequency(22, 222));
console.log("true:", sameFrequency(3003, 3003));
// Complex cases
console.log("false:", sameFrequency(20, 2));
console.log("false:", sameFrequency(300, 003));
