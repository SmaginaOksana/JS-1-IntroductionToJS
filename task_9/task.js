const num = +prompt("Укажите свой средний балл");
if (num <= 4 && num >= 1) {
  console.log("Двоечник, иди учись!");
} else if (num <= 8 && num >= 5) {
  console.log("Неплохо, но давай еще поднажмем!");
} else if (num <= 10 && num >= 9) {
  console.log("Oго, да ты настоящий отличник!");
}
