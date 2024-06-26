let pessoa = {
    nome: "Mateus Paiva",
    cpf: 920930,
    cidade: "Joao Pessoa - PB"
};

const notas = [2,9,9,10];

const media = (notas[0] + notas[1] + notas[2] + notas[3])/notas.length;

const notaAleatoria = notas[Math.floor(Math.random() *
    notas.length)];

const notaConvertida = notaAleatoria*10;

console.log(`O nome da pessoa e ${pessoa.nome} com CPF ${pessoa.cpf} e mora na cidade de ${pessoa.cidade}`)
console.log(`A nota 1 do aluno e ${notas[0]}
            A nota 2 do aluno e ${notas[1]}
            A nota 3 do aluno e ${notas[2]}
            A nota 4 do aluno foi ${notas[3]}
            A media do aluno foi ${media}
            E a nota aleatoria foi ${notaAleatoria} e a convertida fica ${notaConvertida}`);