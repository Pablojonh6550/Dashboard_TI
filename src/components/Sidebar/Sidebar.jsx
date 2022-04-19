import React from "react";

import { Link } from "react-router-dom";

//--Icons--
import { MdOutlineComputer } from 'react-icons/md';
import { GiTechnoHeart } from 'react-icons/gi';
import { FiLogOut, FiSmartphone } from 'react-icons/fi';
import { TiWiFi } from 'react-icons/ti';
//--Hooks--
import { useState } from 'react';
//--CSS--
import './css/sidebar.css';

function Sidebar() {

    const [currentLink, setCurrentLink] = useState(1);

    return (
        <>
            <div className="container">
                <div className="top">
                    <div className="bottom">
                    <div className="brand">
                        <GiTechnoHeart />
                        <span>Dashboard TI</span>
                    </div>
                    </div>
                    <div className="toogle">

                    </div>
                    <div className="links">
                        <ul>
                            <li onClick={() => setCurrentLink(1)} className={currentLink === 1 ? 'active' : 'li_class'}>
                                <Link to='/'>
                                    <TiWiFi className="icon_link" />
                                    <span className='span_link'>Rede</span>
                                </Link>    
                            </li>
                            <li onClick={() => setCurrentLink(2)} className={currentLink === 2 ? 'active' : 'li_class'}>
                                <Link to="/computer">
                                    <MdOutlineComputer className="icon_link" />
                                    <span className='span_link'>Computador</span>
                                </Link>    
                            </li>
                            <li onClick={() => setCurrentLink(3)} className={currentLink === 3 ? 'active' : 'li_class'}>
                                <Link to="/smartphone">
                                    <FiSmartphone className="icon_link" />
                                    <span className='span_link'>Smartphone</span>
                                </Link>    
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="logout">
                    <a className="logout_a" href="#">
                        <FiLogOut />
                        <span className="logout_span">Logout</span>
                    </a>
                </div>
            </div>   
        </>
    );    
}

export default Sidebar;