import { useState } from "react";
import siteLogo from "./assets/img/shared/logo.svg";
import burgerMenu from "./assets/img/shared/icon-hamburger.svg";
import closeMenu from "./assets/img/shared/icon-close.svg";
// import { Icon } from '@iconify/react';

function Navbar() {
    const navList = ['Home', 'Destination', 'Crew', 'Technology'];
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeMenu, setActiveMenu] = useState(false);

    const showMenu = function () {
        const navList = document.querySelector('.navbar-list');
        navList.classList.toggle('active');
        // navList.classList.toggle('not-active');
        setActiveMenu(!activeMenu);
    }

    const handleClick = index => setActiveIndex(index);
    return (
        <nav className="navigation">
            <a href="" className='site-logo'>
                <img src={siteLogo} alt="" />
            </a>
            <hr />
            <ul className="navbar-list">
                {navList.map((el, i) => {
                    return <li className={activeIndex === i ? 'navbar-item active' : 'navbar-item'} key={i}><a className="navbar-link" href="/" onClick={() => handleClick(i)}><b> 0{i}</b> {el}</a></li>
                })}
                <img src={!activeMenu ? burgerMenu : closeMenu} alt="" className="burger" onClick={showMenu} />
            </ul>
            {/* <Icon icon="material-symbols:menu" className="burger" /> */}
        </nav>
    );
}

export default Navbar;