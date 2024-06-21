const point = +prompt("Введите балл за экзамен от 0 до 100");
const proj = +prompt("Введите количество выполненных проектов от 0 и больше");
if ((point > 90 && point < 100) || proj > 10) {
  console.log(100);
} else if (point > 75 && proj >= 5) {
  console.log(90);
} else if (point > 50 && proj >= 2) {
  console.log(75);
} else {
  console.log(0);
}
