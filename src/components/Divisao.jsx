import React from 'react'

const Divisao = (props) => {
  const results = props.num1 / props.num2;
  
  return (
    <div className="operacao">
      <h1>O resultado de {props.num1} : {props.num2} = {results}</h1>  
    </div>
  )
}

export default Divisao