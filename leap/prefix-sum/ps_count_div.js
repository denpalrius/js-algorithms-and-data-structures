function solution(A, B, K) {
  const offset = A % K === 0 ? 1 : 0;
  return parseInt(B / K) - parseInt(A / K) + offset;
}

// const dataSet = [
//   { A: 6, B: 11, K: 2, expectedRes: 3 },
//   { A: 1, B: 10, K: 5, expectedRes: 2 },
//   { A: 59, B: 250, K: 60, expectedRes: 4 },
//   { A: 100, B: 123000000, K: 2, expectedRes: 61499951 },
//   { A: 101, B: 123000000, K: 10000, expectedRes: 12300 },
//   { A: 0, B: Number.MAX_SAFE_INTEGER, K: 20, expectedRes: 9 },
// ];

// for (data of dataSet) {
//   const results = solution(data.A, data.B, data.K);
//   console.log({ expected: data.expectedRes, got: results });
// }

module.exports = solution;
