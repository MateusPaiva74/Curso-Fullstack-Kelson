let pessoa = {
    nome: "Mateus Andre",
    cpf: 123.456-90 ,
    cidade: "Joao Pessoa"
};

const notas = [5,8,9,2];

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

const notaAleatoria = notas[Math.floor(Math.random() *
    notas.length)];

const notaConvertida = notaAleatoria *10;


console.log(`Nome da pessoa: ${pessoa.nome}`);
console.log(`CPF da pessoa: ${pessoa.cpf}`);
console.log(`Cidade ${pessoa.cidade}`);
console.log(`A primeira nota do aluno e: ${notas[0]}`);
console.log(`A segunda nota do aluno e: ${notas[1]}`);
console.log(`A terceira nota do aluno e: ${notas[2]}`);
console.log(`A quarta nota do aluno e: ${notas[3]}`);
console.log(`A media das notas e: ${media}`);
console.log(`A nota sorteada foi ${notaAleatoria} e a convertida para escala de 0-100: ${notaConvertida}`);
//n