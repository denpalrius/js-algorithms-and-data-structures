function computeMultiplesSum(n) {
  let count = 0;

   for (let i = 0; i < n; i++) {
    const multiple = i % 3 === 0 || i % 5 === 0 || i % 7 === 0;

    if (multiple && i < n) {
      count += i;
      console.log(i, count);
    }
  }
}

console.log(computeMultiplesSum(11)); // 6
