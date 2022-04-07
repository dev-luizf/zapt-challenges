// Se listarmos todos os números naturais abaixo de 10 que são múltiplos de 3 ou 5,
// obtemos 3, 5, 6 e 9. A soma desses múltiplos é 23.
// Desenvolva uma função que encontra a soma de todos os múltiplos de 3 ou 5 abaixo de 1000.

const multiples = [];

const verifyIfIsMultiple = (number) => {
    let aux = 1;
    do {
        if ((number === 3 * aux) || ((number === 5 * aux))) {
            multiples.push(number);
        }
        aux += 1;
    } while (aux < number);
};

const sumOfMultiples = () => {
    let number = 1;
    do {
        verifyIfIsMultiple(number);
        number += 1;
    } while (number < 1000);
    
    return multiples.reduce((acc, crr) => acc + crr, 0);
};

console.log(sumOfMultiples());
