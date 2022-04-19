import React from "react";

import SetorButton from '../Button/SetorButton';
import './css/setor.css';

function Setor() {
    return (
        <div className="container_setor">
            <SetorButton route="/setor" name="Compras" />
            <SetorButton route="/computer" name="Compras" />
            <SetorButton route="/computer" name="Compras" />
            <SetorButton route="/computer" name="Compras" />
            <SetorButton route="/computer" name="Compras" />
        </div>
    );
}

export default Setor;