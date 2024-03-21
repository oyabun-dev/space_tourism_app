import { useState } from "react";
import siteLogo from "./assets/img/shared/logo.svg";

function Navbar() {
    const [navList, setNavList] = useState(['Home', 'Destination', 'Crew', 'Technology']);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = index => setActiveIndex(index);
    return (
        <nav className="navigation">
            <a href="" className='site-logo'>
                <img src={siteLogo} alt="" />
            </a>
            <hr />
            <ul className="navbar-list">
                {navList.map((el, i) => {
                    return <li className={activeIndex === i ? 'navbar-item active' : 'navbar-item'} key={i}><a className="navbar-link" href="" onClick={() => handleClick(i)}><b> 0{i}</b> {el}</a></li>
                })}
            </ul>
        </nav>
    );
}

export default Navbar;