const ADMIN_PASSWORD = "jqueryismyjam";
let message;
let userPassword;

userPassword = prompt("Введите пароль");
if (userPassword === ADMIN_PASSWORD) {
  message = "Добро пожаловать";
} else message = "Доступ запрещен, неверный пароль!";

if (userPassword === null) {
  message = "Отменено пользователем";
}

alert(message);
