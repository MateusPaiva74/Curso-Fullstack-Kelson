import React from 'react'

const Multiplicacao = (props) => {
  const result = props.num1 * props.num2;
  
  return (
    <div className="operacao">
        <h1>O resultado de {props.num1} x {props.num2} = {result}</h1>
      </div>
  )
}

export default Multiplicacao