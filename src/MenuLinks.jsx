import React from 'react';
const MenuLinks = (props) => {
    return (

        <li >
            {props.link}
            {props.children}

        </li>


    );
}

export default MenuLinks;