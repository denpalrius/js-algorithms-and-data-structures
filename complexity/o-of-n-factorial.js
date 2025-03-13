
function oOfNFactorial(n) {
    if (n === 0) {
        console.log("Base case reached");
        return 1;
    }
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log("Factorial of 5: ", oOfNFactorial(5)); // 120
console.log("Factorial of 10: ", oOfNFactorial(10)); // 3628800