import React from 'react'
import Logo from './img/world-logo.png'
import Relogio from './Relogio'

export default function Header(){
    return(        
        <header className="App-header">
            <Relogio/>            
            <img src={Logo} className="App-logo"/>
            <h1>Países</h1>
        </header>                
    )
}