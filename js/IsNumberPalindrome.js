// Функция, которая принимает число и возвращает true/false в зависимости от того является ли число палиндромом

const poly = 1221;

const isNumberPalindrome = (number) => {
  const str = number.toString();
  return str === str.split('').reverse().join('');
};

isNumberPalindrome(poly); // true
