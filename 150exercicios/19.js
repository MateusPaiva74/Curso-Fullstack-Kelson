
function encontrarMenorNumero(numeros){
    const menorNumero = Math.min(...numeros);
    return menorNumero;
}

const numeros = [32,92,42,423,8423,4212,412];
const menor = encontrarMenorNumero(numeros);

console.log(`O menor numero e ${menor}`);