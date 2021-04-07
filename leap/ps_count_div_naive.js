function solution(A, B, K) {
  let results = 0;
  while (A <= B) {
    if (i % K === 0) {
      results += 1;
    }
  }
  return results;
}

const dataSet = [
  { A: 6, B: 11, K: 2, expectedRes: 3 },
  { A: 1, B: 10, K: 5, expectedRes: 2 },
  { A: 59, B: 250, K: 60, expectedRes: 4 },
  { A: 100, B: 123000000, K: 2, expectedRes: 4 },
  { A: 101, B: 123000000, K: 10000, expectedRes: 4 },
];

for (data of dataSet) {
  test(`countDiv(${data.A}, ${data.B}, ${data.K}) to equal ${data.expectedRes}`, () => {
    expect(solution(6, 11, 2)).toBe(3);
  });
}
