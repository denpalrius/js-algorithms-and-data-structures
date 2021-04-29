function computeClosestToZero(ts) {
  // Write your code here
  // To debug: console.error('Debug messages...');

  let temp = ts[0];

  const len = ts.length;
  const count = len > 10000 ? 10000 : len;

  for (let i = 0; i < count; i++) {
    const currentTemp = ts[i];

    console.log(currentTemp, " : ", temp);

    if (Math.abs(currentTemp) <= Math.abs(temp)) {
      if (Math.abs(currentTemp) === Math.abs(temp) && currentTemp > temp) {
        temp = currentTemp;
      }

      //   if (Math.abs(currentTemp) === Math.abs(temp) && temp < currentTemp) {
      //     temp = currentTemp;
      //   }
    }
  }

  return temp;
}

console.log(computeClosestToZero([11, -2, 2, -12, 3]));

/* Ignore and do not change the code below */
// #region main
// const n = parseInt(readline());
// const ts = readline()
//   .split(" ")
//   .map((j) => parseInt(j))
//   .slice(0, n);
// const oldWrite = process.stdout.write;
// process.stdout.write = (chunk) => console.error(chunk);
// var solution = computeClosestToZero(ts);
// process.stdout.write = oldWrite;
// console.log(solution);
// #endregion
