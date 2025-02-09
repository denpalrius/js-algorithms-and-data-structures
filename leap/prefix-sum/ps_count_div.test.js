const solution = require("./ps_count_div");

const dataSet = [
  { A: 6, B: 11, K: 2, expectedRes: 3 },
  { A: 1, B: 10, K: 5, expectedRes: 2 },
  { A: 59, B: 250, K: 60, expectedRes: 4 },
  { A: 100, B: 123000000, K: 2, expectedRes: 61499951 },
  { A: 101, B: 123000000, K: 10000, expectedRes: 12300 },
  { A: 0, B: Number.MAX_SAFE_INTEGER, K: 20, expectedRes: 450359962737050 },
];

for (data of dataSet) {
  test(`countDiv(${data.A}, ${data.B}, ${data.K}) to equal ${data.expectedRes}`, () => {
    expect(solution(data.A, data.B, data.K)).toBe(data.expectedRes);
  });
}
