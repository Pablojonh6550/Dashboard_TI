import React from "react";

import './css/smartphone.css';
import SmartphoneCard from '../Cards/SmartphoneCard';
import ButtonAdd from "../Button/ButtonAdd";
import Nav from "../Nav/Nav";

function Smartphone() {
    return (
        <>
        <section className="smartphone_container">
            <Nav tittle="Celulares"/>
            <div className="smartphone_cards">
                <SmartphoneCard />
                <SmartphoneCard />
                <SmartphoneCard />
                <SmartphoneCard />
                <SmartphoneCard />
                <SmartphoneCard />
                <SmartphoneCard />
                <SmartphoneCard />
            </div>
            <div className="button">
                <ButtonAdd />
            </div>
        </section>
        </>
    );    
}

export default Smartphone;