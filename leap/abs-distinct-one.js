// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  if (!A.length) return 0;

  return new Set(A.map(val => Math.abs(val))).size;


}