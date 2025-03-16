/**
 * Calculates the nth Fibonacci number using recursion with memoization.
 * This function uses an object to cache previously computed values.
 *
 * Algorithm used: Recursion with memoization
 *
 * Time complexity - O(n) - linear
 * Space complexity - O(n) - linear (for memoization cache and recursion stack)
 *
 * @param {number} n - The position in the Fibonacci sequence
 * @param {object} memo - Cache object to store previously computed values
 * @param {string} side - Indicator for debugging which branch of recursion is being executed
 * @returns {number} - The nth Fibonacci number
 */
function fibonacciMemo(n, memo = {}, side = "base") {
    console.log(`n: ${n}, side: ${side}, memo: ${Object.entries(memo)}`);
  
    // Base cases: F(0) = 0, F(1) = 1, F(2) = 1
    if (n === 0) return 0;
    if (n === 1 || n === 2) return 1;
  
    // Check if result is already cached
    if (memo[n]) return memo[n];
  
    // Calculate and cache the result
    memo[n] =
      fibonacciMemo(n - 1, memo, "left") + fibonacciMemo(n - 2, memo, "right");
    return memo[n];
  }
  
  function test(n, expected) {
    const actual = fibonacciMemo(n);
    const res = `${actual === expected ? "✅ passed" : "🆘 failed"}`;
  
    console.log(`Test with n=${n}: ${res} (got ${actual}, expected ${expected})`);
  }
  
  // Test cases
  test(0, 0);
  test(1, 1);
  test(2, 1);
  test(5, 5);
  test(10, 55);
  test(20, 6765);