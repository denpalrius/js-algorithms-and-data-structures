// Time complexity: O(n)
// Time complexity: O(1)

function solution(A) {
  // Validate input array
  if (!A || !A.length) return false;

  // Create lookup object
  const lookup = {};

  // Populate lookup object with frequencies
  for (let i = 0; i < A.length; i++) {
    const item = A[i];
    lookup[item] ? (lookup[item] += 1) : (lookup[item] = 1);
  }

  // Check for occurence of odd number in lookup object, then return false
  for (const value of Object.values(lookup)) {
    if (value % 2 !== 0) return false;
  }

  // Return true by default
  return true;
}
