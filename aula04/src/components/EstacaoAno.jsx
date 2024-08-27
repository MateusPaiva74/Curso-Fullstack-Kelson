import React from 'react'
import styles from './EstacaoAno.module.css'

const EstacaoAno = ({estacao}) => {
    function definirEstacao(){
        if(estacao === "Verao"){
            return "tempo de praia e sol"
        }else if(estacao === "Inverno"){
            return "época de frio chegandp"
        }else if(estacao === "Outono"){
            return "folhas caindo, outono chegando"
        }else if(estacao === "Primavera"){
            return "Flores e cores, é primavera"
        }
    }

    function definirCorDeFundo(estacao){
        if(estacao === "Verao"){
            return styles.verao
        }else if (estacao === "Inverno"){
            return styles.inverno
        }else if(estacao === "Outono"){
            return styles.outono
        }else{
            return styles.primavera
        }
    }
  return (
    <div className={definirCorDeFundo(estacao)}>
        <p>{definirEstacao(estacao)}</p>
    </div>
  )
}

export default EstacaoAno