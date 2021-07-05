import React from 'react'

export default function Dados(props){    
    let descoberta = 1522
    let atual = 2021
    return(        
        <>
            <h2>Informações sobre o País</h2>         
            <section className="App-content">                        
                <p>País: {props.pais()}</p>                
                <img className="Pais-flag" src={props.flag}/>
                <p>Anos: {props.calcAnos(atual, descoberta)}</p>
                <p>Governo: {props.governo}</p>                            
            </section>                
        </>
    )
}