import React from "react";

import Nav from "../Nav/Nav";
import RedeCard from '../Cards/RedeCard';
import RamalCard from "../Cards/RamalCard";
import ButtonAdd from "../Button/ButtonAdd";

import './css/setorpage.css'; 
import ImpressoraCard from "../Cards/ImpressoraCard";

function SetorPage({setor}) {
    return (
        <>
        <section className="setorpage_container">
            <Nav tittle={`Mapa de Rede -> ${setor}`}/>
                <span>Impressora</span>
            <div className="map">
                <ImpressoraCard />
            </div>
                <span>Ramal</span>
            <div className="map">
                <RamalCard />
            </div>
                <span>Rede</span>
            <div className="map">
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
export default SetorPage;