import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from 'react-router-dom';

import { NavBar } from './NavBar';

import { PantallaUno } from './PantallaUno';
import { PantallaDos } from './PantallaDos';
import { PantallaTres } from './PantallaTres';

export const AppRouter = () => {
    return (
        <Router>
            <div className="contenerdorGeneral">
                
                <NavBar />

                <div className="contanedorPantalla">
                    <Switch>

                        <Route exact path="/PantallaUno" component={ PantallaUno } />
                        <Route exact path="/PantallaDos" component={ PantallaDos } />
                        <Route exact path="/PantallaTres" component={ PantallaTres } />
                        
                        <Redirect to="/" />

                    </Switch>
                </div>
            </div>
        </Router>
    )
}
