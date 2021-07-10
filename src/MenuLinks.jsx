import React from 'react';
const MenuLinks = (props) => {
    return (  
        <div>
            <li>
            {props.link}
            {props.children}
            
            </li>
        </div>
        
    );
}
 
export default MenuLinks;