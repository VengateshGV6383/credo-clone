import React from 'react';
import MenuLinks from './MenuLinks';
import './MenuBar.css'
import { NavLink } from 'react-router-dom';
const MenuBar = () => {
    const menuItems=["Counsellor","Member Experience","Health Coach","Core Mnager","Paharmacologist","Nutrionist","Testing Doctor","Daily TODO log","Others"]
    return (  
        <div className="menu-bar">
            <ul>
            {
                menuItems.map((item)=>{
                    return(
                    <NavLink to={`/${item.toLocaleLowerCase().replace(' ','-')}`} activeClassName="active-link">
                            <MenuLinks key={menuItems.indexOf(item)} link={item}>
                                 <i class="chevron right icon"></i>
                            </MenuLinks>
                    </NavLink>
                   
                        )
                })
            }
        </ul>
        </div>
    );
}
 
export default MenuBar;
