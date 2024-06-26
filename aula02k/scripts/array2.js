const temperaturas = [25, 30, 15, 20];

console.log(temperaturas);

var temperaturaAleatoria = temperaturas[Math.floor(Math.random() *
    temperaturas.length)];

var conversaoParaFahrenheint = ((temperaturaAleatoria*9)/5) + 32;

console.log(`a temperatura sorteada foi ${temperaturaAleatoria}C, que corresponde a ${conversaoParaFahrenheint}F`);

