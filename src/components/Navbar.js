import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import siteLogo from "../assets/img/shared/logo.svg";
import burgerMenu from "../assets/img/shared/icon-hamburger.svg";
import closeMenu from "../assets/img/shared/icon-close.svg";
// import { act } from "react-dom/test-utils";
// import { Icon } from '@iconify/react';

function Navbar() {
    const navList = ['home', 'destination', 'crew', 'technology'];
    const [activeIndex, setActiveIndex] = useState(null);
    const [activeMenu, setActiveMenu] = useState(false);

    const showMenu = function () {
        const navList = document.querySelector('.navbar-list');
        navList.classList.toggle('active');
        setActiveMenu(!activeMenu);
    }

    const handleMenu = function (e) {
        const newIndex = parseInt(e.target.dataset.navId);
        setActiveIndex(newIndex);
    }
    const navUlClass = activeMenu ? 'showMenu' : 'hideMenu';

    return (
        <nav className="navigation">
            <Link to="/" className='site-logo'>
                <img src={siteLogo} alt="" />
            </Link>
            <hr />
            <ul className="navbar-list">
                {navList.map((el, i) => {
                    return (
                        <NavLink className={activeIndex === i ? `navbar-item active ${navUlClass}` : `navbar-item ${navUlClass}`} to={`/${el}`} data-nav-id={i} key={i} onClick={handleMenu}>
                            <b>0{i}</b>{el} {activeIndex}
                        </NavLink>
                    );
                })}

                <img src={!activeMenu ? burgerMenu : closeMenu} alt="" className="burger" onClick={showMenu} />
            </ul>

            {/* <Icon icon="material-symbols:menu" className="burger" /> */}
        </nav >
    );
}

export default Navbar;