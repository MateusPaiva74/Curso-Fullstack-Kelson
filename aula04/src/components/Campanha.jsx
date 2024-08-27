import React from 'react'
import styles from './Campanha.module.css'
const Campanha = (props) => {

    function defineMensagem(mes){
        if(mes === "setembro"){
            return "Prevenção ao suicídio"
        } else if(mes === "outubro"){
            return "Prevenção ao câncer de mama"
        } else if(mes === "novembro"){
            return "Prevenção ao câncer de prostata"
        }
    }

    function defineCorDeFundo(mes){
        if(mes === "setembro"){
            return styles.setembro
        } else if(mes === "outubro"){
            return styles.outubro
        } else{
            return styles.novembro
        }
    }
    
  return (
    <div className={defineCorDeFundo(props.mes)}>
        <p>{defineMensagem(props.mes)}</p>
    </div>
  )
}

export default Campanha