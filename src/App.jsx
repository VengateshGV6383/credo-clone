import React from 'react';
import MenuBar from './MenuBar';
import { BrowserRouter, Switch, Route,  } from 'react-router-dom';
import UserContent from './UserContent';
import NavBar from './NavBar';
import MainContent from './MainContent'
import Footer from './Footer';
import { useRef } from 'react';
import './App.css';
const App = () => {
    const menuIcon = useRef();
    const handleMenuBar = () => {
        try {
            if (menuIcon.current.style.display === "flex")
                menuIcon.current.style.display = "none";
            else
                menuIcon.current.style.display = "flex";
        } catch (e) {
            console.log(menuIcon.current)
        }
    }
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
    const menuItems = ["Home", 
    "Counsellor", "Member Experience", 
    "Health Coach", "Care Manager", "Paharmacologist", "Nutrionist", "Testing Doctor", "Daily TODOlog", "Others"];
    return (
        <React.Fragment>
            <div>
                <NavBar toggleMenuBar={handleMenuBar} />
            </div>
            <div className="main-block">
            
                <BrowserRouter>
                <div style={{ display: "flex" }}>
                        <MenuBar refer={menuIcon} />
                </div>
                    <Switch>

                        {menuItems.map((item,index) => {
                            return (item !== "Home" ?
                                <Route key={index}
                                    render={(props) =>
                                        (<MainContent {...props} name={item} records={records}/>)}
                                    path={`/${item.toLowerCase().replace(' ', '-')}`}
                                    exact={true}
                                />
                                :
                                <Route  key={index} render={(props) => (
                                    <MainContent {...props} name={item} />)}
                                    path="/" exact={true}
                                />)

                        })}
                        {
                            records.map((record,index)=>{
                                return(
                                    <Route key={index}
                                    render={(props)=>(<UserContent {...props } record={record} />)}
                                    path={`/dashboard/${record.name.toLocaleLowerCase().replace(' ','-')}`}
                                    exact={true}
                                />
                                )
                            })
                                
                            }
                    

                    </Switch>
                   
                </BrowserRouter>
            </div>
            <Footer />
        </React.Fragment>



    )
}
export default App;