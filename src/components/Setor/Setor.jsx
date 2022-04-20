import React from "react";

import SetorButton from '../Button/SetorButton';

import {setor} from '../../database';
import './css/setor.css';

function Setor() {
    const setores = setor;
    
        return (
            <div className="container_setor">
                {
                    setores.map((data) => { 
                        return(
                            <SetorButton route={data.rota} name={data.setor} />
                        )
                    })
                }
            </div>
        )

}

export default Setor;