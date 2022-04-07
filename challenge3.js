// Os fatores primos de 13195 são 5, 7, 13 e 29.
// Desenvolva uma função que encontra o maior fator primo do número 600851475143

// Um número primo só é divisível por 1 e ele mesmo
// Todo número natural, maior que 1, pode ser decomposto em um produto de dois ou mais fatores
// Todo número que não tem nenhum divisor entre 1 e sua raíz é primo

const isPrime = (number) => {
    if (number < 2) return false;

    for (let i = 2; i < Math.sqrt(number); i += 1) {
        if (number % i === 0) return false;
    }
    return true;
};

const findBiggerPrimeFactor = () => {
    let biggerPrimeFactor = 0;
    const number = 600851475143;
    
    for (let i = 1; i < Math.sqrt(number); i += 1) {
        if (isPrime(i) && number % i === 0) {
            biggerPrimeFactor = i;
        }
    }
    return biggerPrimeFactor;
};

console.log(findBiggerPrimeFactor());
