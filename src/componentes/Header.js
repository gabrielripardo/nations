import React from 'react'
import Logo from './img/20-gon-dissection-random.svg'

export default function Header(){
    return(
        <header className="App-header">
            <img src={Logo} className="App-logo"/>
            <h1>Países</h1>
        </header>        
    )
}