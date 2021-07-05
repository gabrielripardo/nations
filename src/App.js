import React,{useState} from 'react'
import './App.css'
import Header from './componentes/Header'
import Menu from './componentes/Menu'
import {Info, Wiki} from './componentes/Corpo'
import Relogio from './componentes/Relogio'
import Numero from './componentes/Numero'
// import Eu from '/perfil_github.jpg'


export default function App(){
  
  const [money, setMoney] = useState(1)

  return(        
    <section>      
      <Numero money={money} setMoney={setMoney}/>      
      <Relogio/>
      <Header/>   
      <Menu/> {/*  invoca o componente criado em outro arquivo js              */}      
      <Info/>
      <Wiki/>
    </section>
  )
}
