// Функция, которая принимает массив чисел и возвращает новый массив, содержащий только четные числа
const filterEvenNumbers = (arr) => arr.filter(num => num % 2 === 0);

// Функция, которая принимает массив чисел и возвращает новый массив, содержащий квадраты этих чисел
const squareNumbers = (arr) => arr.map(num => num ** 2);

// Функция, которая принимает массив объектов и возвращает новый массив, содержащий только объекты с определённым свойством
const filterObjectsByProperty = (arr, prop) => arr.filter(obj => obj.hasOwnProperty(prop));

// Функция, которая принимает массив чисел и возвращает их сумму
const sumNumbers = (arr) => arr.reduce((acc, num) => acc + num, 0);

// Функция высшего порядка, которая принимает функцию и массив в качестве аргументов и применяет функцию к каждому элементу массива
const applyFunctionToArray = (fn, arr) => arr.map(fn);

// Математические операции:

//сумма квадратов всех чётных чисел в заданном массиве
const sumOfSquaresOfEvenNumbers = (arr) => {
  const evenNumbers = filterEvenNumbers(arr);
  const squaredEvenNumbers = squareNumbers(evenNumbers);
  return sumNumbers(squaredEvenNumbers);
};

//среднее арифметическое всех чисел, больших заданного значения, в заданном массиве объектов
const averageOfNumbersGreaterThanValue = (arr, value) => {
  const filteredObjects = arr.filter(obj => obj.value > value);
  const numbersGreaterThanValue = filteredObjects.map(obj => obj.value);
  const sum = sumNumbers(numbersGreaterThanValue);
  return sum / numbersGreaterThanValue.length;
};

// Пример использования:

const numbers = [1, 2, 3, 4, 5, 6];
console.log(sumOfSquaresOfEvenNumbers(numbers)); // 56 (4 + 16 + 36)

const objects = [{ value: 10 }, { value: 20 }, { value: 5 }];
console.log(averageOfNumbersGreaterThanValue(objects, 10)); // 20
