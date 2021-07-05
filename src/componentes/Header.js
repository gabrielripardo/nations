import React from 'react'
import Logo from './img/world-logo.png'

export default function Header(){
    return(
        <header className="App-header">
            <img src={Logo} className="App-logo"/>
            <h1>Países</h1>
        </header>        
    )
}