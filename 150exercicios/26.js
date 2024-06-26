
function stringsMinusculo(array) {
    let novoArray = [];

    for(let i = 0; i < array.lenght; i ++) {
        let stringsMinusculo = array[i].toLowerCase();
        novoArray.push(stringsMinusculo);
    }
    return novoArray;
}

let arraySimples = ["Chinelo","Sapato","Calca"];
let novaVar = stringsMinusculo(arraySimples);

console.log(`Array simples ${arraySimples}`);
console.log(`E minusculo agora ${novaVar}`);