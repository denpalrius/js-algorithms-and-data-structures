function solution(A) {
  if (A.length < 2 || A.length >= 100000 || A.length % 2 !== 0) {
    return false;
  }

  let countOdd = 0;
  let countEven = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] % 2 === 0) {
      countEven++;
    } else {
      countOdd++;
    }
  }

  if (countOdd !== countEven) {
    return false;
  }

  return true;
}
