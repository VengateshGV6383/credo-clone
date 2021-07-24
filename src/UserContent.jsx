import React from 'react';
import Avatar from "./images/avatar.png"
import "./Dashboard.css"
import "bootstrap/dist/css/bootstrap.min.css";
const UserContent = ({ record }) => {
    
    const {name,id,age,Bg,gen}=record
    return (
        <React.Fragment>
        <div className="container-fluid m-1 cotainer-body" >
            <div className="row justify-content-evenly align-items-start">
                            
                        <div className="row row-cols-4 user-detail-card flex align-items-center justify-content-between" style={{flexDirection:"column"}}>
                                <img src={Avatar} alt="avatar" className="avatar"></img>
                                <div className="col-12 card m-1 user-detail-card">

                                     <div className="card-body mt-1">

                                            <h4 className="card-title">{name}</h4>
                                            <div className="card-text">
                                                    <div className="row row-cols-2">
                                                            <div className="col col-sm-5">CREDO-ID</div>
                                                            <div className="col col-sm-5 font-weight-bold value">{`CREDOTHU${id}`}</div>
                                                    </div>
                                                
                                                    <div className="row row-cols-2">
                                                        <div className="col col-sm-5">Age</div>
                                                        <div className="col col-sm-5 font-weight-bold value">{age}</div>
                                                    </div>
                                                    <div className="row row-cols-2">
                                                        <div className="col col-sm-5">B.Group</div>
                                                        <div className="col col-sm-5 font-weight-bold value">{Bg}</div>
                                                    </div>
                                                    <div className="row row-cols-2">
                                                        <div className="col col-sm-5">Gender</div>
                                                        <div className="col col-sm-5 font-weight-bold value">{gen}</div>
                                                    </div>
                                                    <div className="row row-cols-2">
                                                        <div className="col col-sm-5">Location</div>
                                                        <div className="col col-sm-5 font-weight-bold value">Trichy</div>
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
                                                <div className="col col-sm-3">Weight</div>
                                                <div className="col col-sm-9 font-weight-bold value">70kg</div>
                                            </div>
                                            <div className="row row-cols-2">
                                                <div className="col col-sm-3">BMI</div>
                                                <div className="col col-sm-9 font-weight-bold value">Normal</div>
                                            </div>
                                           
                                            <div className="row row-cols-2">
                                                <div className="col col-sm-3">MC</div>
                                                <div className="col col-sm-9 font-weight-bold value">Chronical Type2 Diabetes</div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                <div className="col-12 col-lg-4 card m-2 user-detail-card">
                                    <div className="card-body">
                                        <h4 className="card-title">BackLogs</h4>
                                        <div className="card-text">
                                            <div className="row row-cols-2">
                                                    <div className="col col-sm-6">Smoking</div>
                                                    <div className="col col-sm-6 font-weight-bold value">N/A</div>
                                            </div>
                                            <div className="row row-cols-2">
                                                    <div className="col col-sm-6">Alcohol</div>
                                                    <div className="col col-sm-6 font-weight-bold value">N/A</div>
                                            </div>
                                            <div className="row row-cols-2">
                                                    <div className="col col-sm-6">Activity</div>
                                                    <div className="col col-sm-6 font-weight-bold value">N/A</div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-4 card m-2 user-detail-card">
                                    <div className="card-body">
                                        <h4 className="card-title">Plan Details</h4>
                                        
                                            <div className="row row-cols-2">
                                                <div className="col col-sm-4">Type</div>
                                                <div className="col col-sm-8 font-weight-bold value">Standard</div>
                                            </div>
                                            <div className="row row-cols-2">
                                                <div className="col col-sm-4">DOE</div>
                                                <div className="col col-sm-8 font-weight-bold value">00/01/0000</div>
                                            </div>
                                            <div className="row row-cols-2">
                                                <div className="col col-sm-4">Phase</div>
                                                <div className="col col-sm-8 font-weight-bold value">Onboarding</div>
                                            </div>
                                    </div>
                                </div>
                            </div>
            </div>
            <div className="row justify-content-evenly align-items-start ">

                 <div className="row row-cols-4 flex justify-content-evenly macro-details">

                        <div className="col-12 col-lg-4 card m-2 user-detail-card ">
                            <div className="card-body mt-1 param-card">
                               <div className="row row-cols-2 param-head">
                                   <span className="col col-6">
                                        <i className="tint icon" style={{color:"#498BF5"}}></i>
                                     </span>
                                    <span className="col col-6">
                                        <span className="param-head align-self-start" style={{color:"#49ABF5"}}>
                                            Glucose
                                            <br/>
                                            <small>00/00/0000</small>
                                        </span>
                                    </span>
                               </div>
                               <div className="card-text param-value">
                                   <div className="row row-cols-6 ">
                                   <span className="col col-6">
                                                Readings
                                    </span>
                                            <span className="col col-6"  style={{color:"#498BF5"}}>
                                                   100
                                            </span>
                                   </div>
                                   <div className="row row-cols-2">
                                        <span className="col col-sm-6">
                                                Target 
                                        </span>
                                        <span className="col col-sm-6 " style={{color:"#498BF5"}}>
                                                N/A
                                        </span>
                                   </div>
                               </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-4 card m-2 user-detail-card">
                            <div className="card-body mt-1 param-card">
                               <div className="row row-cols-2 param-head">
                                   <span className="col col-6">
                                         <i class="heartbeat icon " style={{color:"#F54949"}}></i>
                                     </span>
                                    <span className="col col-6 ">
                                        <span className="param-head" style={{color:"#F54949"}}>
                                            Pluse<br/>
                                            <small>00/00/00</small>
                                        </span>
                                    </span>
                               </div>
                               <div className="card-text param-value">
                                   <div className="row row-cols-1">
                                            <span className="col col-6">
                                                Ratings
                                            </span>
                                            <span className="col col-6"  style={{color:"#F54949"}}>
                                                92
                                            </span>
                                   </div>
                                   <div className="row row-cols-2">
                                        <span className="col col-sm-6">
                                                Target
                                        </span>
                                        <span className="col col-sm-6"  style={{color:"#F54949"}}>
                                                N/A
                                        </span>
                                   </div>
                               </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-4 card m-2 user-detail-card">
                            <div className="card-body mt-1 param-card">
                               <div className="row row-cols-2 param-head">
                                   <span className="col col-6">
                                         <i className="weight icon" style={{color:"#18A6AA"}}></i>
                                     </span>
                                    <span className="col col-6 ">
                                        <span className="param-head" style={{color:"#18A6AA"}}>
                                            Weight<br/>
                                            <small>00/00/0000</small>
                                        </span>
                                    </span>
                               </div>
                               <div className="card-text param-value">
                                   <div className="row row-cols-1">
                                            <span className="col col-6">
                                                Kilograms
                                            </span>
                                            <span className="col col-6"  style={{color:"#18A6AA"}}>
                                                70
                                            </span>
                                   </div>
                                   <div className="row row-cols-2">
                                        <span className="col col-sm-6">
                                                Target
                                        </span>
                                        <span className="col col-sm-6"  style={{color:"#18A6AA"}}>
                                                N/A
                                        </span>
                                   </div>
                               </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 card m-2 user-detail-card">
                            <div className="card-body mt-1 param-card">
                               <div className="row row-cols-2 param-head">
                                   <span className="col col-6">
                                         <i className="moon icon" style={{color:"#18A4A8"}}></i>
                                     </span>
                                    <span className="col col-6 ">
                                        <span className="param-head" style={{color:"#18A4A8"}}>
                                            Sleep<br/>
                                            <small>00/00/0000</small>
                                        </span>
                                    </span>
                               </div>
                               <div className="card-text param-value">
                                   <div className="row row-cols-1">
                                            <span className="col col-6">
                                                Hours
                                            </span>
                                            <span className="col col-6"  style={{color:"#18A4A8"}}>
                                                5
                                            </span>
                                   </div>
                                   <div className="row row-cols-2">
                                        <span className="col col-sm-6">
                                                Target
                                        </span>
                                        <span className="col col-sm-6"  style={{color:"#18A4A8"}}>
                                                N/A
                                        </span>
                                   </div>
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