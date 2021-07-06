import React from 'react'
import Dados from './Dados'
import Contrast from './Contrast'
import Bandeira from './img/Flag_of_Brazil.svg'

function Info(){    
    const name=()=>{
        return('Brasil')
    }           
    const anos = '499'
    const gov = 'República'
    const flag = Bandeira

    const calcAnos=(n1, n2)=>n1-n2

    return(        
        <>
            <Contrast/>
            <Dados pais={name} anos={anos} governo={gov} flag={flag} calcAnos={calcAnos}/>              
        </>
    )
}

function Wiki(){
    return(
        <p>
            Brasil é um pais com clima tropical, foi descoberto em 1522 por Pedro Álvares Cabral.
        </p>
    )
}

export {Info, Wiki}