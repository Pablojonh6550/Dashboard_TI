import React from "react";

import './css/computerpage.css';
import ComputerCard from '../Cards/ComputerCard';
import ButtonAdd from "../Button/ButtonAdd";
import Nav from "../Nav/Nav";

function ComputerPage() {
    return (
        <>
        <section className="computer_container">
            <Nav tittle="Computadores"/>
            <div className="computer_cards">
                <ComputerCard />
               
            </div>
            <div className="button">
                <ButtonAdd />
            </div>
        </section>
        </>
    );    
}

export default ComputerPage;