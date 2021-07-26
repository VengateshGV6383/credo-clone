import React from 'react';
import Avatar from "./images/avatar.png"
import "./Dashboard.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from 'react-router-dom';
const UserContent = () => {
    const {id}=useParams();
    const records = [
        {
            id: "1", 
            name: "Vengatesh",
            MailID: "Vengat.gv@yahoo.com",
             age: "20",
             Bg:"A1+ve",
             gen:"Male",
            glucose:"90",
             pulse:"97",
             sleep:"4",
             weight:"60",
             MC:"Allergy,Diabetes",
             sugar:"140/150",
             steps:"10000",
             bp:"150",
             active:"9",
             water:"10"

        },
        {
            id: "2", 
            name: "Archana Devi", 
            MailID: "Archana.devi@yahoo.com",
             age: "22",Bg:"A+ve",
             gen:"Female",
            glucose:"150",
             pulse:"96",
             sleep:"3.5",
             weight:"65",
             MC:"Chronic Syndrom T2",
             sugar:"150/160",
             steps:"20000",
             bp:"140",
             active:"8.30",
             water:"9"


        },
        {
            id: "3", 
            name: "Badrinath",
            MailID: "Badri.credo@yahoo.com", 
            age: "22",
            Bg:"O+ve",
            gen:"Male",
           glucose:"120",
            pulse:"97",
            sleep:"4.5",
            weight:"70",
            MC:"Blue Syndrom",
             sugar:"170/160",
             steps:"24000",
             bp:"130",
             active:"10",
             water:"8.25"

            
        },
        {
            id: "4", 
            name: "Balaji", 
            MailID: "Balaji.credo@yahoo.com",
             age: "22",
             Bg:"O-ve",
             gen:"Male",
            glucose:"110",
             pulse:"96",
             sleep:"6",
             weight:"80",
             MC:"Nosil Allergy",
             sugar:"150/170",
             steps:"20200",
             bp:"135",
             active:"9.45",
             water:"6"


        },
        {
            id: "5", 
            name: "Samuel",
             MailID: "Samuel.bardi@yahoo.com", 
             age: "20",
             Bg:"O+ve",
             gen:"Male",
            glucose:"110",
             pulse:"98",
             sleep:"6.45",
             weight:"85",
             MC:"Chronic Diabetes T2",
             sugar:"130/150",
             steps:"25000",
             bp:"141",
             active:"10",
             water:"8"

        },
        {
            id: "6", 
            name: "Kishore",
             MailID: "Kishore.gv@yahoo.com", 
             age: "20",
             Bg:"B+ve",
             gen:"Male",
            glucose:"120",
             pulse:"99",
             sleep:"4.5",
             weight:"90",
             MC:"Chronic Diabetes",
             sugar:"150/170",
             steps:"25000",
             bp:"140",
             active:"7.5",
             water:"5.5"

        },

    ]
    const record=records.filter(item=>item.id===id)
    const {name,age,gen,Bg,glucose,sleep,pulse,weight,MC,sugar,steps,bp,active,water}=record[0];
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
                        <div className="row row-cols-4 m-1 flex justify-content-evenly align-items-center">
                            
                                <div className="col-12 col-lg-4 card m-2 user-detail-card">
                                        <div className="card-body">
                                            <h4 className="card-title">Medical Record</h4>
                                            <div className="row row-cols-2">
                                                <div className="col col-sm-4">Weight</div>
                                                <div className="col col-sm-8 font-weight-bold value">{weight}</div>
                                            </div>
                                            <div className="row row-cols-2">
                                                <div className="col col-sm-4">BMI</div>
                                                <div className="col col-sm-8 font-weight-bold value">Normal</div>
                                            </div>
                                           
                                            <div className="row row-cols-2">
                                                <div className="col col-sm-4">MC</div>
                                                <div className="col col-sm-8 font-weight-bold value">{MC}</div>
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
                                                <div className="col col-sm-8 font-weight-bold value">00/00/0000</div>
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
                                            
                                            <small>
                                                Glucose
                                            </small>
                                        </span>
                                    </span>
                               </div>
                               <div className="card-text param-value">
                               <div className="row row-cols-2 ">
                                        <span className="col col-6">
                                                Active Date
                                        </span>
                                            <span className="col col-6"  style={{color:"#498BF5"}}>
                                                   00/00/0000
                                            </span>
                                   </div>
                                   <div className="row row-cols-2 ">
                                        <span className="col col-6">
                                                Readings
                                        </span>
                                            <span className="col col-6"  style={{color:"#498BF5"}}>
                                                   {glucose}
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
                                         <i className="heartbeat icon " style={{color:"#F54949"}}></i>
                                     </span>
                                    <span className="col col-6 ">
                                        <span className="param-head" style={{color:"#F54949"}}>
                                            
                                            <small>Pluse </small>
                                        </span>
                                    </span>
                               </div>
                               <div className="card-text param-value">
                               <div className="row row-cols-1">
                                            <span className="col col-6">
                                                Active Date
                                            </span>
                                            <span className="col col-6"  style={{color:"#F54949"}}>
                                            00/00/0000
                                            </span>
                                   </div>
                                   <div className="row row-cols-2">
                                            <span className="col col-6">
                                                Readings
                                            </span>
                                            <span className="col col-6"  style={{color:"#F54949"}}>
                                            {pulse}
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
                                            
                                            <small>Weight</small>
                                        </span>
                                    </span>
                               </div>
                               <div className="card-text param-value">
                               <div className="row row-cols-2">
                                            <span className="col col-6">
                                                Active Date
                                            </span>
                                            <span className="col col-6"  style={{color:"#18A6AA"}}>
                                                00/00/0000
                                            </span>
                                   </div>
                                   <div className="row row-cols-2">
                                            <span className="col col-6">
                                                Kilograms
                                            </span>
                                            <span className="col col-6"  style={{color:"#18A6AA"}}>
                                                {weight}
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
                                            
                                            <small>Sleep </small>
                                            
                                            
                                        </span>
                                    </span>
                               </div>
                               <div className="card-text param-value">
                               <div className="row row-cols-2">
                                            <span className="col col-6">
                                                Active Date
                                            </span>
                                            <span className="col col-6"  style={{color:"#18A4A8"}}>
                                                00/00/0000
                                            </span>
                                   </div>
                                   <div className="row row-cols-2">
                                            <span className="col col-6">
                                                Hours
                                            </span>
                                            <span className="col col-6"  style={{color:"#18A4A8"}}>
                                                {sleep}
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
                        <div className="col-12 col-lg-4 card m-2 user-detail-card">
                            <div className="card-body mt-1 param-card">
                               <div className="row row-cols-2 param-head">
                                   <span className="col col-6">
                                         <i className="tint icon" style={{color:"#498BF5"}}></i>
                                     </span>
                                    <span className="col col-6 ">
                                        <span className="param-head" style={{color:"#498BF5"}}>
                                            
                                            <small>Sugar</small>
                                        </span>
                                    </span>
                               </div>
                               <div className="card-text param-value">
                               <div className="row row-cols-2">
                                            <span className="col col-6">
                                                Active Date
                                            </span>
                                            <span className="col col-6"  style={{color:"#498BF5"}}>
                                                00/00/0000
                                            </span>
                                   </div>
                                   <div className="row row-cols-2">
                                            <span className="col col-6">
                                                Asy/dsy
                                            </span>
                                            <span className="col col-6"  style={{color:"#498BF5"}}>
                                                {sugar}
                                            </span>
                                   </div>
                                   <div className="row row-cols-2">
                                        <span className="col col-sm-6">
                                                Target
                                        </span>
                                        <span className="col col-sm-6"  style={{color:"#498BF5"}}>
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
                                         <i className="hourglass half icon" style={{color:"#FD7112"}}></i>
                                     </span>
                                    <span className="col col-6 ">
                                        <span className="param-head" style={{color:"#FD7112"}}>
                                            
                                            <small>Steps</small>
                                        </span>
                                    </span>
                               </div>
                               <div className="card-text param-value">
                               <div className="row row-cols-2">
                                            <span className="col col-6">
                                                Active Date
                                            </span>
                                            <span className="col col-6"  style={{color:"#FD7112"}}>
                                                00/00/0000
                                            </span>
                                   </div>
                                   <div className="row row-cols-2">
                                            <span className="col col-6">
                                                Kilometers
                                            </span>
                                            <span className="col col-6"  style={{color:"#FD7112"}}>
                                                {steps}
                                            </span>
                                   </div>
                                   <div className="row row-cols-2">
                                        <span className="col col-sm-6">
                                                Target
                                        </span>
                                        <span className="col col-sm-6"  style={{color:"#FD7112"}}>
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
                                         <i className="thermometer half icon" style={{color:"#F54949"}}></i>
                                     </span>
                                    <span className="col col-6 ">
                                        <span className="param-head" style={{color:"#F54949"}}>
                                           
                                            <small> Blood Pressure</small>
                                        </span>
                                    </span>
                               </div>
                               <div className="card-text param-value">
                               <div className="row row-cols-2">
                                            <span className="col col-6">
                                                Active Date
                                            </span>
                                            <span className="col col-6"  style={{color:"#F54949"}}>
                                                00/00/0000
                                            </span>
                                   </div>
                                   <div className="row row-cols-2">
                                            <span className="col col-6">
                                                Reading
                                            </span>
                                            <span className="col col-6"  style={{color:"#F54949"}}>
                                                {bp}
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
                                         <i className="clock icon" style={{color:"#18A4A8"}}></i>
                                     </span>
                                    <span className="col col-6 ">
                                        <span className="param-head" style={{color:"#18A4A8"}}>
                                           
                                            <small> Active Time</small>
                                        </span>
                                    </span>
                               </div>
                               <div className="card-text param-value">
                               <div className="row row-cols-2">
                                            <span className="col col-6">
                                                Active Date
                                            </span>
                                            <span className="col col-6"  style={{color:"#18A4A8"}}>
                                                00/00/0000
                                            </span>
                                   </div>
                                   <div className="row row-cols-2">
                                            <span className="col col-6">
                                                Hours
                                            </span>
                                            <span className="col col-6"  style={{color:"#18A4A8"}}>
                                                {active}
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
                        <div className="col-12 col-lg-4 card m-2 user-detail-card">
                            <div className="card-body mt-1 param-card">
                               <div className="row row-cols-2 param-head">
                                   <span className="col col-6">
                                         <i className="tint icon" style={{color:"#49ABF5"}}></i>
                                     </span>
                                    <span className="col col-6 ">
                                        <span className="param-head" style={{color:"#49ABF5"}}>
                                           
                                            <small> Water</small>
                                        </span>
                                    </span>
                               </div>
                               <div className="card-text param-value">
                               <div className="row row-cols-2">
                                            <span className="col col-6">
                                                Active Date
                                            </span>
                                            <span className="col col-6"  style={{color:"#49ABF5"}}>
                                                00/00/0000
                                            </span>
                                   </div>
                                   <div className="row row-cols-2">
                                            <span className="col col-6">
                                                Litre/day
                                            </span>
                                            <span className="col col-6"  style={{color:"#49ABF5"}}>
                                                {water}
                                            </span>
                                   </div>
                                   <div className="row row-cols-2">
                                        <span className="col col-sm-6">
                                                Target
                                        </span>
                                        <span className="col col-sm-6"  style={{color:"#49ABF5"}}>
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