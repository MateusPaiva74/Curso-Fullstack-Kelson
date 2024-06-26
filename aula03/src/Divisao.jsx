import React from 'react'

const Divisao = (props) => {
    const resultado = props.num1 / props.num2;
  return (
    <div className='operacao'>
        <h1>Essa divisao {props.num1}/{props.num2} resulta em {resultado}</h1>
    </div>
  )
};

export default Divisao