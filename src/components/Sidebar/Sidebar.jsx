import React from "react";

import { Link } from "react-router-dom";

//--Icons--
import { MdSpaceDashboard } from 'react-icons/md';
import { RiComputerLine } from 'react-icons/ri';
import { FiLogOut } from 'react-icons/fi';
//--Hooks--
import { useState, useEffect } from 'react';
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
                        <RiComputerLine />
                        <span>Dashboard TI</span>
                    </div>
                    </div>
                    <div className="toogle">

                    </div>
                    <div className="links">
                        <ul>
                            <li onClick={() => setCurrentLink(1)} className={currentLink === 1 ? 'active' : ''}>
                                <Link to='/'>
                                    <MdSpaceDashboard className="icon_link" />
                                    <span className='span_link'>Rede</span>
                                </Link>    
                            </li>
                            <li onClick={() => setCurrentLink(2)} className={currentLink === 2 ? 'active' : ''}>
                                <Link to="/computer">
                                    <MdSpaceDashboard className="icon_link" />
                                    <span className='span_link'>Computador</span>
                                </Link>    
                            </li>
                            <li onClick={() => setCurrentLink(3)} className={currentLink === 3 ? 'active' : ''}>
                                <a href="#">
                                    <MdSpaceDashboard className="icon_link" />
                                    <span className='span_link'>Smartphone</span>
                                </a>    
                            </li>
                            <li onClick={() => setCurrentLink(4)} className={currentLink === 4 ? 'active' : ''}>
                                <a href="#">
                                    <MdSpaceDashboard className="icon_link" />
                                    <span className='span_link'>Dashboard</span>
                                </a>    
                            </li>
                            <li onClick={() => setCurrentLink(5)} className={currentLink === 5 ? 'active' : ''}>
                                <a href="#">
                                    <MdSpaceDashboard className="icon_link" />
                                    <span className='span_link'>Dashboard</span>
                                </a>    
                            </li>
                            <li onClick={() => setCurrentLink(6)} className={currentLink === 6 ? 'active' : ''}>
                                <a href="#">
                                    <MdSpaceDashboard className="icon_link"/>
                                    <span className='span_link'>Dashboard</span>
                                </a>    
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