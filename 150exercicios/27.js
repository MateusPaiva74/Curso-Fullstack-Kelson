
let arrayDeFabrica = [0,1,2,3,4,5,6];

function receberNumeros(array) {
    let receberArray = [0,1,2,3,4,5,6];

    for(let i = 0; i < array.lenght; i ++) {
        let receberNumeros = array[i] * array[i];
        receberArray.push(receberNumeros);
    }
    return receberArray;
}
let arrayAoQuadrado = receberNumeros(arrayDeFabrica);

console.log(`Array de fabrica e ${arrayDeFabrica}`);
console.log(`Array ao quadrado e ${arrayAoQuadrado}`);