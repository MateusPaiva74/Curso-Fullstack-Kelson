const numeros = [2,32,423,234,1,23,65,432];

const calcularSoma = numeros.reduce((acumulador, numero) => acumulador + numero,0 );

console.log(`A soma de todos os numeros do array ${calcularSoma}`);