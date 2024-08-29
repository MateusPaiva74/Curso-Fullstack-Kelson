import React from 'react'

const AdicionarAluno = () => {
    const urlBase = "http://localhost:3000"
    const addAluno = async () =>{
        const response = await axios.post(`${urlBase}/alunos`, {
            nome: "Mateus",
            email: "mateus@gmail.com"
        })

        console.log("Aluno adicionado com sucessor")
        alert("Aluno cadastrado com sucesso")
    }
  return (
    <div className="">

    </div>
  )
}

export default AdicionarAluno