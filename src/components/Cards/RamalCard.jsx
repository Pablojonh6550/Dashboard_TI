import React from "react";

import './css/ramalcard.css';

function RamalCard() {
    return (
        <div className="ramalcard_card">
            <h4>Ramal: </h4>
            <p>
                <span>Setor:</span> 
                <span>Usuario:</span> 
                <span>Número:</span> 
            </p>
        </div>
    );
}

export default RamalCard;