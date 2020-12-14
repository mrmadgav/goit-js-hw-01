let credits = 23580;
let pricePerDroid = 3000;
let totalPrice;
let amount;
let message;

amount = prompt("Сколько дроидов вам завернуть?");
totalPrice = amount * pricePerDroid;
if (totalPrice > credits) {
  message = "Недостаточно средств на счету!";
} else
  message = `Вы купили ${amount} дроидов, на счету осталось ${
    credits - totalPrice
  } кредитов`;

if (amount === null) {
  message = "Отменено пользователем";
}

alert(message);