import React from 'react';
import MenuBar from './MenuBar';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import NavBar from './NavBar';
import MainContent from './MainContent'
import Footer from './Footer';

const App=()=>{
    const menuItems=["Home","Counsellor","Member Experience","Health Coach","Core Mnager","Paharmacologist","Nutrionist","Testing Doctor","Daily TODO log","Others"];
    return (
        <React.Fragment>
            <div>
                <NavBar/>
            </div>
            <div style={{display:'flex',gap:"10px"}}>
                <BrowserRouter>
                    <MenuBar/>
                        <Switch>
                           
                            {menuItems.map((item)=>{
                                return(item!=="Home"?
                                <Route  
                                    render={(props)=>
                                        (<MainContent {...props} name={item}/>)}
                                        path={`/${item.toLowerCase().replace(' ','-')}`} 
                                        exact={true}
                                        /> 
                                        :
                                        <Route  render={(props)=>(
                                            <MainContent {...props} name={item}/>)}
                                        path="/" exact={true}
                                        />)
                            })}
                        </Switch>
                    </BrowserRouter>
            </div>
            <Footer/>
        </React.Fragment>
        
        
         
    )
}
export default App;