import React,{useState} from 'react'
import {NavLink} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles'

export default function Menu(props){
    const [color, setColor] = useState(1)

    const darkblue = {color: "#61dafb", backgroundColor: "darkblue"}
    const greenblack = {color: "#61dafb", backgroundColor: "#25291C"}
    const lightyellow = {color: "black", backgroundColor: "#EDFF86"}

    const changeColor = (val) =>{
        if(val==1) return darkblue
        else if(val==2) return greenblack
        else return lightyellow
    }

    const controlColors = (color) =>{
        console.log(`Val: ${color}`)
        setColor(color)
        if(color > 3){
            setColor(1)
        }                        
    }

    const menuStyles = makeStyles((theme) => ({
        root: {            
            color: 'white !important',
        },
    }))
    
    const linkStyle = menuStyles()
    
    return(        
        <nav className="App-menu" style={changeColor(color)}>
            <div className="menu-links">
                <NavLink to="/" exact activeClassName={linkStyle.root}>Home</NavLink>
                <NavLink to="/lista" activeClassName={linkStyle.root}>Lista</NavLink>
                <NavLink to="/sobre" activeClassName={linkStyle.root}>Sobre nós</NavLink>                         
            </div>            
            <button onClick={()=>controlColors(color+1)} style={greenblack}>Color</button>     
        </nav>
    )
}


//references: https://coolors.co/1be7ff-f5d0c5-6eeb83-e4ff1a-25291c
