import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav>
            <div className="hijosNavbar">
                <NavLink exact to="PantallaUno" className="hijosNavbar___titulos">Pantalla 1</NavLink>
                <NavLink exact to="PantallaDos" className="hijosNavbar___titulos">Pantalla 2</NavLink>
                <NavLink exact to="PantallaTres" className="hijosNavbar___titulos">Pantalla 3</NavLink>
            </div>
        </nav>
    )
}
