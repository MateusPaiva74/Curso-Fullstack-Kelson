const numbers = [3,5,2,8,6];

let i = 0;
let soma = 0;

while(i < numbers.length){
    console.log(numbers[i]);
    soma += numbers[i];
    i++;
}

console.log(`A soma dos elementos e ${soma}`)