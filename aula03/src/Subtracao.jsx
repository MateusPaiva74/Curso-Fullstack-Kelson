import React from 'react'

const Subtracao = (props) => {
    const resultado = props.num1 - props.num2;

  return (
    <div className='operacao'>
        <h1>Essa subtracao{props.num1}-{props.num2} resulta em = {resultado}</h1>
    </div>
  )
};

export default Subtracao