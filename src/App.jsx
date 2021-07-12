import React from 'react';
import MenuBar from './MenuBar';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import NavBar from './NavBar';
import MainContent from './MainContent'
import Footer from './Footer';
import { useRef } from 'react';
const App=()=>{
    const menuIcon=useRef();
    const handleMenuBar=()=>{
        try{
            if(menuIcon.current.style.display==="flex")
                     menuIcon.current.style.display="none";
        else
            menuIcon.current.style.display="flex";
    }catch(e){
        console.log(menuIcon.current)
    }
        }
       
    const menuItems=["Home","Counsellor","Member Experience","Health Coach","Core Mnager","Paharmacologist","Nutrionist","Testing Doctor","Daily TODO log","Others"];
    return (
        <React.Fragment>
            <div>
                <NavBar toggleMenuBar={handleMenuBar}/>
            </div>
            <div style={{display:'flex',gap:"2%",minHeight:"80vh",maxHeight:"80vh",overflow:"auto",justifyContent:"center"}}>
                <BrowserRouter>
                <div style={{display:"flex"}}>
                    <MenuBar refer={menuIcon}/>

                </div>
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