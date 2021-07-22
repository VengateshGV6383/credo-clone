import React from 'react';
import SearchBox from './SearchBox';
import UserContent from './UserContent';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import './MainContent.css'
import Tables from './Tables';
const MainContent = (props) => {
    const records = [
        {
            id: "1", name: "Vengatesh", MailID: "Vengat.gv@yahoo.com", age: "20"
        },
        {
            id: "2", name: "Archana Devi", MailID: "Archana.devi@yahoo.com", age: "21"
        },
        {
            id: "3", name: "Badrinath", MailID: "Badri.credo@yahoo.com", age: "22"
        },
        {
            id: "4", name: "Balaji", MailID: "Balaji.credo@yahoo.com", age: "22"
        },
        {
            id: "5", name: "Samuel", MailID: "Samuel.bardi@yahoo.com", age: "20"
        },
        {
            id: "6", name: "Kishore", MailID: "Kishore.gv@yahoo.com", age: "20"
        },

    ]
    return (
        <React.Fragment>
            <BrowserRouter>
                <Switch>
                    {
                        records.map(item => {
                            return (
                                <Route
                                    render={(props) => (<UserContent {...props} record={item} />)}
                                    path={`${props.location}/${item.name}`}
                                    exact={true}
                                />
                            )

                        })
                    }

                </Switch>
            </BrowserRouter>
            <div className="main-content">
                <span className="heading">{props.name}'s Record</span>

                <div className="ui segment search-area">

                    <SearchBox />
                </div>
                <div className="ui segment records">


                    {
                        records.map(item => {
                            return (
                                <NavLink path={`${props.location.pathname}/${item.name}`}>
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