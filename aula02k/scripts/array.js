//lenght: retorna o número de elementos de um array
//push(): adiciona um ou mais elementos no final do array

const notas = [8.00,9.00,10.00];

console.log(`Primeira nota: ${notas[0]}. Segunda nota: ${notas[1]}. Terceira nota: ${notas[2]}`);

var media = (notas[0] + notas[1] + notas [2]) / notas.length;

console.log(`A media do aluno foi ${media.toFixed(2)}`);