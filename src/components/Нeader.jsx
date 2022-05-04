import '../css/Header.css';
import logoPng from '../images/logo1.png'
import Menu from "./Menu";
import {Link} from "react-router-dom";
import React from 'react'

function Header() {

    const menu = ['Word lists', 'All words', 'Accounts words', "Add words"]

    const [activeItem, setActiveItem] = React.useState(null);

    return (
        <div className="wrap">
            <div className="header">
                <Link to="/">
                    <img onClick={() => setActiveItem(null)} width="65" height="65" src={logoPng} className="logoClass" alt="Main logo"/>
                </Link>
                <p className="header_text">
                    LEARN THE WORD
                </p>
            </div>
            <Menu items={menu} activeItem={activeItem} setActiveItem={setActiveItem}/>
        </div>
    );
}

export default Header;