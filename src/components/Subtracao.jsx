import React from 'react'

const Subtracao = (props) => {
  const resultados = props.num1 - props.num2;

  return (
    <div className="operacao">
      <h1>O resultado de {props.num1} - {props.num2} = {resultados}</h1>
    </div>
  )
}

export default Subtracao