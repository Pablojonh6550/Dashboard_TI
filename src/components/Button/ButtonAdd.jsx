import React from "react";

import './css/buttonadd.css';
import { GrAdd } from 'react-icons/gr';

function ButtonAdd() {
    return (
        <button className="btn">
            <span>
                <GrAdd/>
            </span>
        </button>
    );
}

export default ButtonAdd;