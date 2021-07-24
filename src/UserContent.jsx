import React from 'react';
import Avatar from "./images/avatar.png"
import "./Dashboard.css"
import "bootstrap/dist/css/bootstrap.min.css";
const UserContent = ({ record }) => {
    
    const {name,id,age,Bg,gen}=record
    return (
        <React.Fragment>
        <div className="container m-1 cotainer-body" >
            <div className="row justify-content-evenly align-items-start">
                            
                        <div className="row row-cols-4 user-detail-card flex align-items-center justify-content-between" style={{flexDirection:"column"}}>
                                <img src={Avatar} alt="avatar" className="avatar"></img>
                                <div className="col-12 card m-1 user-detail-card">

                                     <div className="card-body mt-1">

                                            <h4 className="card-title">{name}</h4>
                                            <div className="card-text">
                                            <div className="row row-cols-2">
                                                    <h6 className="col col-sm-5">CREDO-ID</h6>
                                                    <h6 className="col col-sm-5">{`CREDOTHU${id}`}</h6>
                                            </div>
                                                
                                                <div className="row row-cols-2">
                                                    <h6 className="col col-sm-5">Age</h6>
                                                    <h6 className="col col-sm-5">{age}</h6>
                                                </div>
                                                <div className="row row-cols-2">
                                                    <h6 className="col col-sm-5">B.Group</h6>
                                                    <h6 className="col col-sm-5">{Bg}</h6>
                                                </div>
                                                <div className="row row-cols-2">
                                                    <h6 className="col col-sm-5">Gender</h6>
                                                    <h6 className="col col-sm-5">{gen}</h6>
                                                </div>
                                                <div className="row row-cols-2">
                                                    <h6 className="col col-sm-5">Location</h6>
                                                    <h6 className="col col-sm-5">Trichy</h6>
                                                </div>
                                            </div>
                                     </div>
                                </div>
                        </div>   
                        <div className="row row-cols-4 m-1 flex justify-content-between align-items-center">
                            
                                <div className="col-12 col-lg-4 card m-2 user-detail-card">
                                        <div className="card-body">
                                            <h4 className="card-title">Medical Record</h4>
                                            <div className="row row-cols-2">
                                                <h6 className="col col-sm-6">Weight</h6>
                                                <h6 className="col col-sm-6">70kg</h6>
                                            </div>
                                            <div className="row row-cols-2">
                                                <h6 className="col col-sm-6">BMI</h6>
                                                <h6 className="col col-sm-6">Normal</h6>
                                            </div>
                                           
                                            <div className="row row-cols-2">
                                                <h6 className="col col-sm-6">MC</h6>
                                                <h6 className="col col-sm-6">N/A</h6>
                                            </div>
                                            
                                        </div>
                                    </div>
                                <div className="col-12 col-lg-4 card m-2 user-detail-card">
                                    <div className="card-body">
                                        <h4 className="card-title">BackLogs</h4>
                                        <div className="card-text">
                                            <div className="row row-cols-2">
                                                    <h6 className="col col-sm-6">Smoking</h6>
                                                    <h6 className="col col-sm-6">N/A</h6>
                                            </div>
                                            <div className="row row-cols-2">
                                                    <h6 className="col col-sm-6">Alcohol</h6>
                                                    <h6 className="col col-sm-6">N/A</h6>
                                            </div>
                                            <div className="row row-cols-2">
                                                    <h6 className="col col-sm-6">Activity</h6>
                                                    <h6 className="col col-sm-6">N/A</h6>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-4 card m-2 user-detail-card">
                                    <div className="card-body">
                                        <h4 className="card-title">Plan Details</h4>
                                        
                                            <div className="row row-cols-2">
                                                <h6 className="col col-sm-4">Type</h6>
                                                <h6 className="col col-sm-8">Standard</h6>
                                            </div>
                                            <div className="row row-cols-2">
                                                <h6 className="col col-sm-4">DOE</h6>
                                                <h6 className="col col-sm-8">00/01/0000</h6>
                                            </div>
                                            <div className="row row-cols-2">
                                                <h6 className="col col-sm-4">Phase</h6>
                                                <h6 className="col col-sm-8">Onboarding</h6>
                                            </div>
                                    </div>
                                </div>
                            </div>
            </div>
                
        </div>   

        </React.Fragment>

       
    );
}

export default UserContent;