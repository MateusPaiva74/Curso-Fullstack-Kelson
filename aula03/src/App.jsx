import React from 'react'
import Adicao from './components/Adicao'
import './App.css'
import Subtracao from './Subtracao'
import Divisao from './Divisao'
import Multiplicacao from './Multiplicacao'

const App = () => {
  return (
    <div className='container'>
      <Adicao num1 ={2} num2={3}/>
      <Subtracao num1 ={43} num2={12}/>
      <Divisao num1={10} num2 = {5}/>
      <Multiplicacao num1={23} num2={21}/>
    </div>
  )
}

export default App