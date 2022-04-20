import React from "react";

import './css/rede.css';
import Setor from "../Setor/Setor";
import Nav from "../Nav/Nav";
import Form from "../Form/Form";

function Rede() {
    return (
        <>
        <section className="rede_container">
            <Nav tittle="Setores"/>
            <div className="rede_card">
                <Setor />
            </div>
        </section>
        </>
    );    
}

export default Rede;