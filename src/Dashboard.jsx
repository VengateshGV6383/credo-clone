import React from 'react';
import "./Dashboard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation } from 'react-router-dom';
import  VitalCards from './VitalCards';
import UserDetails from './UserDetails';

const Dashboard = (props) => {

   const location=useLocation();
   const {id}=location.state?location.state:{id:'1'};
  
   
   
    return (
        <React.Fragment>
        <div className="container-fluid m-1 cotainer-body" >
            <UserDetails
                id={id}
            />
            <div className="row justify-content-evenly align-items-start">
        
                 <div className="row row-cols-4 flex justify-content-evenly macro-details ">
                        <VitalCards id={id} {...props}/>
                        
                  </div>
                    

                
            </div>
            
        </div>   

        </React.Fragment>

       
    );
}

export default Dashboard;