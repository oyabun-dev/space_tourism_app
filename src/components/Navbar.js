import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import siteLogo from "../assets/img/shared/logo.svg";
import burgerMenu from "../assets/img/shared/icon-hamburger.svg";
import closeMenu from "../assets/img/shared/icon-close.svg";
import { act } from "react-dom/test-utils";
// import { Icon } from '@iconify/react';

function Navbar() {
    const navList = ['home', 'destination', 'crew', 'technology'];
    const [activeIndex, setActiveIndex] = useState(0); // activerIndex = 0
    const [activeMenu, setActiveMenu] = useState(false);

    const showMenu = function () {
        const navList = document.querySelector('.navbar-list');
        navList.classList.toggle('active');
        setActiveMenu(!activeMenu);
    }
    let id = 0;
    const handleMenu = function (e) {
        id = e.target.dataset.navId;
        setActiveIndex(id);
        console.log(id);
    }

    return (
        <nav className="navigation">
            <Link to="/" className='site-logo'>
                <img src={siteLogo} alt="" />
            </Link>
            <hr />
            <ul className="navbar-list">
                {navList.map((el, i) => {
                    return <li className={activeIndex === id ? 'navbar-item active' : 'navbar-item'} data-nav-id={i} key={i} onClick={(e) => handleMenu(e)}>

                        <Link className="navbar-link" to={`/${el}`} data-nav-id={i}>

                            <b> 0{i}</b>{el} {id}

                        </Link>

                    </li>
                })}
                <img src={!activeMenu ? burgerMenu : closeMenu} alt="" className="burger" onClick={showMenu} />
            </ul>

            {/* <Icon icon="material-symbols:menu" className="burger" /> */}
        </nav >
    );
}

export default Navbar;