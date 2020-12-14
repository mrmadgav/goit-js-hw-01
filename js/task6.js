let total = 0;
let input;
let message = "Было введено не число, попробуй еще раз!";
let inputValid;

do {
  input = prompt("Введите число");
  inputValid = parseInt(input);
  if (Number.isNaN(inputValid) === false) {
    total += Number(input);
  } else if (input !== null) {
    alert(message);
    continue;
  }
} while (input !== null);
message = `Общая сумма ${total}`;
alert(message);
