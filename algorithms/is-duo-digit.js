function isDuoDigit(number) {
  const numberString = number.toString();
  const firstDigit = numberString[0];
  const secondDigit = numberString[1];

  for (let i = 0; i < numberString.length; i++) {
    const element = numberString[i];
    if (element !== firstDigit || (element !== secondDigit && !!secondDigit)) {
      return 1;
    }
  }

  return 0;
}

console.log(isDuoDigit(102));
