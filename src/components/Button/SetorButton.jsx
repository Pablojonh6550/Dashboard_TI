import React from "react";
import { Link } from 'react-router-dom';

import './css/setorbutton.css';

function Setor({ route, name }) {
    return (
        <div>
            <div className="button_setor">
                <Link to={route}>
                    <span>{name}</span>
                </Link>
            </div>
        </div>
            
    );
}

export default Setor;