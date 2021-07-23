import React from 'react';
import SearchBox from './SearchBox';

import { NavLink } from 'react-router-dom';
import './MainContent.css';
import { useRef } from 'react';
import Tables from './Tables';
const MainContent = (props) => {
    const sub1=useRef();
    const sub2=useRef();
    const {records}=props;

    return (
        <React.Fragment>
            
            <div className="main-content">
                <div className="heading">{`${props.name}'s Record`}</div>
            

                <div className="sub-main-1" ref={sub1} >
                        
                        <div className="ui segment search-area">
                            <SearchBox />
                        </div>


                        <div className="ui segment records">


                            {
                                records?.map((item,index) => {
                                    return (
                                        <NavLink style={{textDecorationLine:"none"}} to={`/dashboard/${item.name.toLowerCase().replace(' ','-')}`} key={index}>
                                            <Tables {...item} key={item.id} />
                                        </NavLink>

                                    )
                                })
                            }
                            </div>

                </div>

            </div>

        </React.Fragment>

    );
}

export default MainContent;