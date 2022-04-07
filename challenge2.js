// Cada novo termo na sequência de Fibonacci é gerado pela adição dos dois termos anteriores.
// Começando com 1 e 2, os 10 primeiros termos serão:
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// Desenvolva uma função que encontra a soma de todos os termos pares abaixo de quatro milhões.

const getEvenFibonnaciNumbers = () => {
  let num1 = 1;
  let num2 = 2;
  const limit = 4000000;
  const evenFibTerms = [2];
  let fibTerm = num1 + num2;

  do {
    fibTerm = num1 + num2;
    num1 = num2;
    num2 = fibTerm;
    if (fibTerm % 2 === 0) evenFibTerms.push(fibTerm);
  } while (fibTerm < limit);
  return evenFibTerms;
};

const sumOfEvenFibonacci = () => {
  const evenFibonnaciSequence = getEvenFibonnaciNumbers();
  const result = evenFibonnaciSequence.reduce((acc, crr) => acc + crr, 0);
  return result;
};

console.log(sumOfEvenFibonacci());
