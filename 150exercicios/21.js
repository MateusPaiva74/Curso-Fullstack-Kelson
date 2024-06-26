const numeros = [1,2,3,4,5,6,7,8,9,10,11,12,21,312,412,23,13];

const numeroPares =numeros.filter(numero => numero % 2 == 0);

console.log(`Os numeros pares sao ${numeroPares}`);