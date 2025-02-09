function solution(N, A, B) {
  const adjacencyList = {};
  const M = A.length;

  for (let i = 0; i < M; i++) {
    const aVertex = A[i];
    const bVertex = B[i];

    if (adjacencyList[aVertex]) {
      adjacencyList[aVertex].push(bVertex);
    } else {
      adjacencyList[aVertex] = [bVertex];
    }

    if (adjacencyList[bVertex]) {
      adjacencyList[bVertex].push(aVertex);
    } else {
      adjacencyList[bVertex] = [aVertex];
    }
  }

  for (let i = 1; i < N; i++) {
    const nextEdges = adjacencyList[i];

    if (!nextEdges || nextEdges.indexOf(i + 1) < 0) {
      console.log(i + ":", nextEdges);
      return false;
    }
  }

  return true;
}

const testDataSet = [
  { N: 4, A: [1, 2, 4, 4, 3], B: [2, 3, 1, 3, 1], expectedRes: true },
  { N: 4, A: [1, 2, 1, 3], B: [2, 4, 3, 4], expectedRes: false },
  { N: 6, A: [2, 4, 5, 3], B: [3, 5, 6, 4], expectedRes: false },
  { N: 3, A: [1, 3], B: [2, 2], expectedRes: true },
];

for (data of testDataSet) {
  const results = solution(data.N, data.A, data.B);
  console.log({ expected: data.expectedRes, got: results });
}
