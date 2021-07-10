import React from 'react';
import User from './User';
import './NavBar.css';
import Medium_logoImg from './images/download.png' ;
const NavBar = () => {
    return (  
        <div className="nav-bar">
            <div className="nav-bar-left">
                <span>
                    <img src={Medium_logoImg} alt="logo_Medium" />
                </span>
                <span><i class="bars icon"></i></span>
            </div>
            <div className="nav-bar-right">
                    <User/>
            </div>
            

        </div>
    );
}
 export default NavBar;