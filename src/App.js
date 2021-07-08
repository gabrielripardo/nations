import React,{useState, useEffect} from 'react'
import './App.css'
import Header from './componentes/Header'
import Menu from './componentes/Menu'

import Numero from './componentes/Numero'
// import Eu from '/perfil_github.jpg'
import Home from './componentes/Pages/Home'
import Lista from './componentes/Pages/Lista'
import About from './componentes/Pages/About'

export default function App(){  

  const [money, setMoney] = useState(8717.19) //PIB do Brasil
  const [page, setPage] = useState(0)


  const pageCurrent = (page) => {
    if(page == 1){
      return <Lista/>
    }else if(page == 2){
      return <About/>
    }else{
      return <Home/>
    }
  }

  return(        
    <section>      
      <Numero money={money} setMoney={setMoney}/>            
      <Header/>   
      <Menu page={page} setPage={setPage} /> {/*  invoca o componente criado em outro arquivo js              */}      
      {pageCurrent(page)}
    </section>
  )
}
