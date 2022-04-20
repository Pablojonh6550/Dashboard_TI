import React from "react";

import './css/impressoracard.css';

function ImpressoraCard({impressora, porta}) {
    return (
        <div className="impressora_card">
            <h4>Impressora: {impressora}</h4>  
            <p>
                <span>Porta:</span> {porta}
            </p>
        </div>
    );
}

export default ImpressoraCard;