const notas = [3,8,8];

const average = (notas[0] + notas[1] + notas[2]) / notas.length;

if(average >= 7){
    console.log(`APROVADO`)
} else{
    console.log(`REPROVADO`)
};

console.log(`A primeira nota e ${notas[0]}
 A segunda nota e ${notas[1]}
 A terceira nota e ${notas[2]}
 a MEDIA e ${average}`);