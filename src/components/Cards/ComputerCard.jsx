import React from "react";

import './css/computercard.css';

function ComputerCard() {
    return (
        <div className="computer_card">
            <h4>Maquina: </h4>
            <p>
                <span>Setor:</span> 
                <span>Usuario:</span> 
                <span>Porta Rede:</span> 
            </p>
        </div>
    );
}

export default ComputerCard;