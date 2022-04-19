import React from "react";
import './nav.css';

function Nav({tittle}) {
    return (
        <div className="nav_container">
            <h5>Mapa de {tittle}</h5>
            <div className="line"> </div>
        </div>
    );
}

export default Nav;