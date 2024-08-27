import React from 'react'
import EstacaoAno from './components/EstacaoAno'

const App = () => {
  return (
    <div>
        <EstacaoAno estacao="Verao"/>
        <EstacaoAno estacao="Inverno"/>
        <EstacaoAno estacao="Outono" />
        <EstacaoAno estacao="Primavera" />
    </div>
  )
}

export default App