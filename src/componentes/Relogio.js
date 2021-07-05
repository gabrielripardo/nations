import React from 'react'

export default function Relogio(){
    return(
        <p class="App-clock">
            {new Date().toLocaleTimeString()}
        </p>
    )
}