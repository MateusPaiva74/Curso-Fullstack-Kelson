import React from 'react'
import Adicao from './components/Adicao'
import Divisao from './components/Divisao'
import Multiplicacao from './components/Multiplicacao'
import Subtracao from './components/Subtracao'
import './App.css'

const App = () => {
  return (
    <div className="container">
      <Adicao num1={32}  num2={3}/>
      <Divisao num1={6280} num2={12}/>
      <Multiplicacao num1={257} num2={12}/>
      <Subtracao num1={3084} num2={677}/>
    </div>
  )
}

export default App