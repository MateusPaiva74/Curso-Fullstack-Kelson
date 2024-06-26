const average = 7.0;

var notas = [6,8,9,4      ];

const media = (notas[0] + notas[1] + notas[2] + notas[3])/ notas.length.toFixed(2);
if (media >= average){
    console.log(`APROVADO`);
}   else{
    console.log(`REPROVADO`)
}

console.log(`A primeira nota do aluno e: ${notas[0]} \n A segunda nota do aluno e: ${notas[1]} \n A terceira nota do aluno e: ${notas[2]} \n A quarta nota do aluno e: ${notas[3]}`);