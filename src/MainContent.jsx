import React from 'react';
import SearchBox from './SearchBox';
import UserContent from './UserContent';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import './MainContent.css'
import Tables from './Tables';
const MainContent = (props) => {

    const records = [
        {
            id: "1", name: "Vengatesh", MailID: "Vengat.gv@yahoo.com", age: "20",Bg:"A1+ve"
        },
        {
            id: "2", name: "Archana Devi", MailID: "Archana.devi@yahoo.com", age: "21",Bg:"A+ve"
        },
        {
            id: "3", name: "Badrinath", MailID: "Badri.credo@yahoo.com", age: "22",Bg:"O+ve"
        },
        {
            id: "4", name: "Balaji", MailID: "Balaji.credo@yahoo.com", age: "22",Bg:"O-ve"
        },
        {
            id: "5", name: "Samuel", MailID: "Samuel.bardi@yahoo.com", age: "20",Bg:"O+ve"
        },
        {
            id: "6", name: "Kishore", MailID: "Kishore.gv@yahoo.com", age: "20",Bg:"B+ve"
        },

    ]
    return (
        <React.Fragment>
            
            <div className="main-content">
                <span className="heading">{props.name}'s Record</span>

                <div className="ui segment search-area">

                    <SearchBox />
                </div>
                <BrowserRouter>

                <div className="ui segment records">


                    {
                        records.map(item => {
                            return (
                                <NavLink style={{textDecorationLine:"none"}} to={`${props.location.pathname}/${item.name.toLocaleLowerCase().replace(' ', '-')}`} key={records.indexOf(item)}>
                                    <Tables {...item} key={item.id} />
                                </NavLink>

                            )
                        })
                    }
                    <Switch>
                       {
                           records.map(record=>{
                            return(
                                <Route
                                render={(props)=>(<UserContent {...props } record={record}/>)}
                                path={`${props.location.pathname}/${record.name.toLocaleLowerCase().replace(' ', '-')}`}
                                exact={true}
                            />
                            )
                           })
                            
                        }
                    </Switch>


                </div>

            </BrowserRouter>
                

            </div>

        </React.Fragment>

    );
}

export default MainContent;