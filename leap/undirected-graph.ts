// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N: number, A: number[], B: number[]) {
  // write your code in JavaScript (Node.js 8.9.4)
  const visited = [];
  const currentPath = [];

  const matrix: number[][] = [];

  for (let i = 1; i <= N; i++) {
    const aVal = A[i]; 
    const bArray = [];
    for (let j = 1; j <= N; j++) {
      const bVal = B[j];
      console.log([aVal, bVal]);

      bArray.push(bVal);

      // matrix[i][j] = 1;
      // matrix[j][i]=true;
      // console.log(matrix);
    }
    console.log("------------");

    matrix[i] = bArray;
  }
  console.log(matrix);
}

solution(4, [3, 1, 2], [2, 3, 1]);
// console.log(solution(4, [1, 2, 4, 4, 3], [2, 3, 1, 3, 1]));
