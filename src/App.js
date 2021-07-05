import React,{useState} from 'react'
import './App.css'
import Header from './componentes/Header'
import Menu from './componentes/Menu'
import {Info, Wiki} from './componentes/Corpo'
import Numero from './componentes/Numero'
// import Eu from '/perfil_github.jpg'


export default function App(){
  
  const [money, setMoney] = useState(8717.19) //PIB do Brasil

  return(        
    <section>      
      <Numero money={money} setMoney={setMoney}/>            
      <Header/>   
      <Menu/> {/*  invoca o componente criado em outro arquivo js              */}      
      <Info/>
      <Wiki/>
    </section>
  )
}
