// функция, которая принимает массив и чисел и возвращает только уникальные значения

const numbers = [1, 4, 5, 9, 2, 5, 1];

const getUniqueNumbers = (arr) => {
  const numberCount = {};

  // Подсчитываем количество вхождений каждого числа
  arr.forEach((number) => {
    numberCount[number] = (numberCount[number] || 0) + 1;
  });

  // Фильтруем числа, оставляя только уникальные (встречающиеся один раз)
  return arr.filter((number) => numberCount[number] === 1);
};

getUniqueNumbers(numbers);
// console.log(uniqueNumbers); // [4, 9, 2]
