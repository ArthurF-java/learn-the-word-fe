import React from 'react';
import '../css/Menu.css';


function Menu(props) {

    const [activeItem, setActiveItem] = React.useState(null);

    const onSelectItem = (index) => {
        setActiveItem(index)
    }

    return (
        <div className="menu">
            <ul>
                {props.item.map((element, index) => (
                    <li className={activeItem === index ? 'active_button' : ''}
                        onClick={() => onSelectItem(index)}
                        key={`${element}_${index}`}> {element}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Menu;