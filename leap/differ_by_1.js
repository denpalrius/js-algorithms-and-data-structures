function solution(A) {
  if (A.length < 2 || A.length >= 100000) {
    return false;
  }

  const dictionary = {};

  for (let i = 0; i < A.length; i++) {
    dictionary[A[i]] = true;
  }

  for (let i = 0; i < A.length; i++) {
    if (dictionary[A[i]] && dictionary[A[i] + 1]) {
      return true;
    }
  }

  return false;
}

const dataSet = [
  // Simple test cases
  { A: [7], expectedRes: false },
  { A: [4, 3], expectedRes: true },
  // Edge cases
  { A: [11, 1, 8, 12, 14], expectedRes: true },
  { A: [4, 10, 8, 5, 9], expectedRes: true },
  { A: [5, 5, 5, 5, 5, 5], expectedRes: false },
];

for (data of dataSet) {
  const results = solution(data.A, data.B, data.K);
  console.log({ expected: data.expectedRes, got: results });
}
