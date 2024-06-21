let number = 9;
if (number === 0) {
  number = 1;
  console.log(number);
} else if (number < 0) {
  number = "less then zero";
  console.log(number);
} else {
  number *= 10;
  console.log(number);
}
