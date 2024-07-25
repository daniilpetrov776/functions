// Напиши функцию fizzBuzz, которая
// принимает целое число n и возвращает массив длиной n,
//  заполненный числами от 1 до n, но с следующими правилами:

// - Для чисел, кратных 3, вместо числа должно быть "Fizz".
// - Для чисел, кратных 5, вместо числа должно быть "Buzz".
// - Для чисел, кратных как 3, так и 5, должно быть "FizzBuzz".

// console.log(fizzBuzz(15));
// [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]

const fizzBuzz = (n) => {
  const result = [];
  for (let i = 1; i <= n; i++) {
    let output = '';
    switch(true) {
      case i % 3 === 0 && i % 5 === 0 :
        output += 'FizzBuzz';
        break;
      case i % 3 === 0 :
        output += 'Fizz';
        break;
      case i % 5 === 0 :
        output += 'Buzz';
        break;
    }
    result.push(output || i);
  }
};

fizzBuzz(16);
