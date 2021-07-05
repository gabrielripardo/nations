import React from 'react'

export default function Numero(props){    
  
    return(    
        <header style={{color: '#fff', backgroundColor: 'black', padding: '4px 5px'}}>
            <span style={{paddingRight: '20px'}}>PIB per capita: $ <span style={{color: '#0f0'}}>{props.money},00</span> USD</span>                
            <button onClick={()=>props.setMoney(props.money+1)}>Add +1 R$</button>      
        </header>                    
    )
}