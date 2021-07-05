import React from 'react'

export default function Numero(props){
    return(
        <>
            <header style={{color: '#0f0', backgroundColor: 'black', padding: '4px 5px'}}>
                Saldo: R$ {props.money},00            
            </header>
            <button onClick={()=>props.setMoney(props.money+1)}>Add +1 R$</button>      
        </>
    )
}