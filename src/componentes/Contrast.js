import React,{useState} from 'react'

export default function Contrast(){
    const bgGreen = 'green'
    const bgRed = 'red'     

    const [ligado, setLigado] = useState(false)
    return(
        <section>
            <div style={{width: '50px', height: '50px', background: ligado?bgGreen:bgRed}}></div>
            <button onClick={()=>setLigado(!ligado)}>{ligado?'Light Contrast':'High Contrast'}</button>
        </section>
    )
}