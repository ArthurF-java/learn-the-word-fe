import React from 'react';
import '../css/Header.css';
import logoPng from '../images/logo1.png'
import Menu from "./Menu";

function Header() {
    const menu = ['Word lists', 'All words', 'Accounts words', "Add words"]
    return (
        <div className="wrap">
            <div className="header">
                <img  width="50"  src={logoPng} className="logoClass" alt="Main logo"/>
                <div>
                    <p className="logoText">&nbsp;&nbsp;Learn the word!</p>
                </div>
            </div>
            <Menu item={menu}/>
        </div>

    );
}

export default Header;