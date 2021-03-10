function fizzBuzz(n) {
  if (!n) return [];

  const results = [];

  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      //   console.log("FizzBuzz");
      results.push("FizzBuzz");
    } else if (i % 3 === 0) {
      //   console.log("Fizz");
      results.push("Fizz");
    } else if (i % 5 === 0) {
      //   console.log("Buzz");
      results.push("Buzz");
    } else {
      //   console.log(i);
      results.push(`${i}`);
    }
  }

  return results;
}

function test(n) {
  console.log(`${n} : `, fizzBuzz(n));
}

// Simple tests
test(3);
test(5);
test(10);
test(15);
test(30);

// Edge case tests
test(0);
test(-15);
test(2000);
