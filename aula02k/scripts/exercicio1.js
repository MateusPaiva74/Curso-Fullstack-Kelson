const cpf = "12345678";

var nome = "Mateus";

function sobreNome() {
    let sobreNome = "Andre";
    return sobreNome;
}
    console.log(`${nome} ${sobreNome} ${cpf}`);

    // Corrigindo a chamada para console.log e o nome da variável "cpf"
    console.log(`O nome: ${nome} ${sobreNome()}. Com cpf: ${cpf}`);

