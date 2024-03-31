import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import siteLogo from "../assets/img/shared/logo.svg";
import burgerMenu from "../assets/img/shared/icon-hamburger.svg";
import closeMenu from "../assets/img/shared/icon-close.svg";
// import { Icon } from '@iconify/react';

function Navbar() {
    const navList = ['home', 'destination', 'crew', 'technology'];
    const [activeIndex, setActiveIndex] = useState(0); // activerIndex = 0
    const [activeMenu, setActiveMenu] = useState(false);

    useEffect(() => {
        console.log(activeIndex)
    }, [activeIndex]);

    const showMenu = function () {
        const navList = document.querySelector('.navbar-list');
        navList.classList.toggle('active');
        setActiveMenu(!activeMenu);
    }

    return (
        <nav className="navigation">
            <Link to="/" className='site-logo'>
                <img src={siteLogo} alt="" />
            </Link>
            <hr />
            <ul className="navbar-list">
                {navList.map((el, i) => {
                    return <li className={activeIndex === i ? 'navbar-item active' : 'navbar-item'} key={i}>

                        <NavLink className="navbar-link" to={`/${el}`} onClick={(e) => {
                            console.log(e.target)
                            setActiveIndex(i)
                        }}>

                            <b> 0{i}</b>{el}

                        </NavLink>

                    </li>
                })}
                <img src={!activeMenu ? burgerMenu : closeMenu} alt="" className="burger" onClick={showMenu} />
            </ul>

            {/* <Icon icon="material-symbols:menu" className="burger" /> */}
        </nav >
    );
}

export default Navbar;