import React from 'react';
import '../css/Menu.css';
import {Link} from "react-router-dom";

function getUrl(url) {
    switch (url) {
        case 'Word lists':
            return '/word-lists';
        case 'All words':
            return 'all-word';
        case 'Accounts words' :
            return 'account-word';
        case 'Add words' :
            return '/add-word';
        default :
            require('/')
    }
}

function Menu({items, activeItem, setActiveItem}) {

    return (
        <div className="menu">
            <ul>
                {items.map((name, index) => (
                    <Link to={getUrl(name)} style={{textDecoration: 'none'}}>
                        <li className={activeItem === index ? 'active_button' : ''}
                            onClick={() => setActiveItem(index)}
                            key={`${name}_${index}`}>
                            {name}
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
}

export default Menu;