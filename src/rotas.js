import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './componentes/Pages/Home';
import Lista from './componentes/Pages/Lista';
import Sobre from './componentes/Pages/About';

export default function Router(){
    return(
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/lista" component={Lista}/>
            <Route path="/sobre" component={Sobre}/>            
        </Switch>
    );
}