/**
 * Calculates the nth Fibonacci number using simple recursion.
 * This function calculates each value by adding the two previous numbers.
 *
 * Algorithm used: Recursion
 *
 * Time complexity - O(2^n) - exponential
 * Space complexity - O(n) - linear (due to recursion stack)
 *
 * @param {number} n - The position in the Fibonacci sequence
 * @returns {number} - The nth Fibonacci number
 */
function fibonacci(n) {
  // Base cases
  if (n <= 1) return n;
  if (n === 2) return 1;
  
  // Recursive case: sum of the two previous numbers
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function test(n, expected) {
  const actual = fibonacci(n);
  const res = `${actual === expected ? "✅ passed" : "🆘 failed"}`;

  console.log(`Test with n=${n}: ${res} (got ${actual}, expected ${expected})`);
}

// Test cases
test(0, 0);
test(1, 1);
test(2, 1);
test(5, 5);
test(10, 55);
// test(20, 6765); // Commented out because this would be very slow with non-memoized version