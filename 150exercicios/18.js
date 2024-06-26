
function encontrarMaiorNumero(numeros){
    const maiorNumero = Math.max(...numeros);
    return maiorNumero;
}

const numeros = [12,91,84,92,9182,8129,8293];
const maior = encontrarMaiorNumero(numeros);

console.log(`O maior numero do array e ${maior}`);