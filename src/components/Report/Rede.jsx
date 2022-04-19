import React from "react";

import './css/rede.css';
import RedeCard from "../Cards/RedeCard";
import ButtonAdd from "../Button/ButtonAdd";
import Nav from "../Nav/Nav";

function Rede() {
    return (
        <>
        <section className="rede_container">
            <Nav tittle="Rede"/>
            <div className="rede_card">
                <RedeCard />
                <RedeCard />
                <RedeCard />
                <RedeCard />
                <RedeCard />
                <RedeCard />
                <RedeCard />
                <RedeCard />
                <RedeCard />
                <RedeCard />
                <RedeCard />
                <RedeCard />
                <RedeCard />
                <RedeCard />
            </div>
            <div className="button">
                <ButtonAdd />
            </div>
        </section>
        </>
    );    
}

export default Rede;