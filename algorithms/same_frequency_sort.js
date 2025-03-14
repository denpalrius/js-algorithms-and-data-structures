// Time complex: O(n)
function sameFrequency(a, b) {
  // Check validity
  if (!a || !b) return false;

  // Parse using Number(val) and get String representation
  const aStr = Number(a).toString();
  const bStr = Number(b).toString();

  // Check length
  if (aStr.length !== bStr.length) return false;

  // Sort each number string as array and convert back to string
  const aStrSorted = aStr.split("").sort().join("");
  const bStrSorted = bStr.split("").sort().join("");
  // Return equality of both numbers
  return aStrSorted === bStrSorted;
}

// Simple tests
console.log("true:", sameFrequency(182, 281));
console.log("false:", sameFrequency(34, 14));
console.log("true:", sameFrequency(3589578, 5879385));
console.log("false:", sameFrequency(22, 222));
// Complex cases
console.log("false:", sameFrequency(20, 2));
console.log("false:", sameFrequency(300, 003));
