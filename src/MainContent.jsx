import React from 'react';
import SearchBox from './SearchBox';

import { NavLink } from 'react-router-dom';
import './MainContent.css';

import Tables from './Tables';
const MainContent = (props) => {
    let url;
    if(props.location.pathname.search("credo-clone")){
        url="/credo-clone"
    }
    else{
        url=props.location.pathname
    }
    const records = [
        {
            id: "1", name: "Vengatesh", MailID: "Vengat.gv@yahoo.com", age: "20",Bg:"A1+ve",gen:"Male"
        },
        {
            id: "2", name: "Archana Devi", MailID: "Archana.devi@yahoo.com", age: "22",Bg:"A+ve",gen:"Female"
        },
        {
            id: "3", name: "Badrinath", MailID: "Badri.credo@yahoo.com", age: "22",Bg:"O+ve",gen:"Male"
        },
        {
            id: "4", name: "Balaji", MailID: "Balaji.credo@yahoo.com", age: "22",Bg:"O-ve",gen:"Male"
        },
        {
            id: "5", name: "Samuel", MailID: "Samuel.bardi@yahoo.com", age: "20",Bg:"O+ve",gen:"Male"
        },
        {
            id: "6", name: "Kishore", MailID: "Kishore.gv@yahoo.com", age: "20",Bg:"B+ve",gen:"Male"
        },

    ]

    return (
        <React.Fragment>
            
            <div className="main-content">
                <div className="heading">{`${props.name}'s Record`}</div>
            

                
                        <div className="ui segment search-area">
                            <SearchBox />
                        </div>


                        <div className="ui segment records">


                            {
                                
                                records?.map((item,index) => {
                                    
                                    return (
                                        <NavLink 
                                        style={{textDecorationLine:"none"}} 
                                        to={{
                                            pathname:`${url}/dashboard`,
                                            state:{id:item.id}
                                         }}  
                                          key={index}>
                                            <Tables {...item} key={item.id} />
                                        </NavLink>

                                    )
                                })
                            }
                            </div>

                </div>

        

        </React.Fragment>

    );
}

export default MainContent;