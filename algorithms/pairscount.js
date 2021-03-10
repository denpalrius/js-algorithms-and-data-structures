function count(n) {
  const pairs = new Set();

  for (let i = 1; i <= n; i++) {
    console.log(i);

    for (let j = 1; j <= n; j++) {
      pairs.add(`${i}${j}`);
    }
  }

  return pairs;
}
