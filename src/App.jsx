import React from 'react';
import MenuBar from './MenuBar';
import { BrowserRouter, Switch, Route,  } from 'react-router-dom';
import Dashboard from './Dashboard';
import Chart from './Chart'
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
                                        (<MainContent {...props} name={item} />)}
                                    path={`/${item.toLowerCase().replace(' ', '-')}`}
                                    exact={true}
                                />
                                :
                                <Route  key={index} render={(props) => (
                                    <MainContent {...props} name={item} />)}
                                    path="/credo-clone/" exact={true}
                                />)

                        })}
                        {
                            menuItems.map((item,index)=>{
                                return( item!=="Home"?
                                    <Route key={index}
                                    render={(props)=>(<Dashboard {...props }  />)}
                                    path={`/${item.toLocaleLowerCase().replace(' ','-')}/dashboard`}
                                    exact={true}
                                />
                                :
                                <Route key={index}
                                    render={(props)=>(<Dashboard {...props }  />)}
                                    path={`/credo-clone/dashboard`}
                                    exact={true}
                                    />
                                
                                )
                            })
                                
                            }
                            {
                            menuItems.map((item,index)=>{
                                return( item!=="Home"?
                                    <Route key={index}
                                    render={(props)=>(<Chart {...props }  />)}
                                    path={`/${item.toLocaleLowerCase().replace(' ','-')}/dashboard/Chart`}
                                    exact={true}
                                />
                                :
                                <Route key={index}
                                    render={(props)=>(<Chart {...props }  />)}
                                    path={`/credo-clone/dashboard/Chart`}
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