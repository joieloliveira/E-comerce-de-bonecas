import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import Main from './pages/main';
import MinhaConta from './pages/minhaConta';
import SobreEmpresa from './pages/sobreEmpresa';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main}></Route>
                <Route path="/MinhaConta" exact component={MinhaConta}></Route>
                <Route path="/SobreEmpresa" exact component={SobreEmpresa}></Route>
                <Redirect from='*' to='/' />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;