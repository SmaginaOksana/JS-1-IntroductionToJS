const number1 = +prompt("Введите число");
const number2 = +prompt("Введите еще одно число");
if (number1 > number2) {
  console.log("Большее число: " + number1);
} else if (number1 < number2) {
  console.log("Большее число: " + number2);
} else {
  console.log("Одинаковые числа");
}
