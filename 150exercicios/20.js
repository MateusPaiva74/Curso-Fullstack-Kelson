
function calcularMedia(numeros){
    const soma = numeros.reduce((acc, num) => acc + num, 0);
    const media = soma / numeros.length;
    return media;
}

const numeros = [32,92,42,423,8423,4212,412];
const media = calcularMedia(numeros);

console.log(`A media e ${media}`)