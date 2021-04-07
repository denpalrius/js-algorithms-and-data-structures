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
      return false;
    }
  }

  return true;
}

console.log({
  expected: true,
  got: solution(4, [1, 2, 4, 4, 3], [2, 3, 1, 3, 1]),
});
