import React from 'react';
import Avatar from "./images/avatar.png"
import "./Dashboard.css"
import Chart from "react-apexcharts";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from 'react-router-dom';

import DashboardCard from './DashboardCard';
import { useState } from 'react';


const UserContent = () => {
   const [value,setValues]=useState([]);
   const [heading,setHeadings]=useState(" ");
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
    const {name,age,gen,Bg,weight,MC}=record[0];
    const getData=(value,heading)=>{
        console.log(value)
        setValues(value);
        setHeadings(heading)
    }
   
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
                        {
                            <DashboardCard
                            glucose={record[0].glucose}
                            weight={record[0].weight}
                            sleep={record[0].sleep}
                            pulse={record[0].pulse}
                            steps={record[0].steps}
                            water={record[0].water}
                            sugar={record[0].sugar}
                            bp={record[0].bp}
                            active={record[0].active}
                            getGrpahData={getData}
                            
                            />
                        }              

                        
                  </div>
                    

                <div className="row row-cols-2 justify-content-center align-items-center chart mt-1">
                    <div className="col col-lg-6">
                    <Chart 
                        type="line"
                        
                        options={
                            
                            {
                               legend:{
                                position:"top"
                               },
                                chart:{
                                    toolbar:{
                                        show:true,
                                        tools:{
                                            download:true ,
                                            reset:false,
                                            zoom:false,
                                            zoomin:false,
                                            zoomout:false,
                                            pan:false
                                        }
                                    },
                                    animations:{
                                        enabled:true,
                                        easing:"easein",
                                        speed:800
                                    }
                                },
                                stroke:{
                                
                                    width:[2,2]
                                },
                                title:{
                                    text:`${heading} `,
                                    
                                    
                                    style:{
                                    
                                        fontFamily:"Josefin Sans",
                                        
                                        animateGradually: {
                                            enabled: true,
                                            delay: 150
                                        },
                                        dynamicAnimation: {
                                            enabled: true,
                                            speed: 350
                                        }
                                    }
                                },
                               
                                markers: {
                                size: 5,
                                },
                               
                                xaxis:{
                                    categories:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
                                }
                            }
                        }
                        series={[{
                            name:"Generted Data",
                            data:value
                        },{
                            name:"Static data",
                            data:[101,137,205,249,299,310,400]
                        }]}
                        height={300}
                        
                    />
                    </div>
                    
                </div>
            </div>
            
        </div>   

        </React.Fragment>

       
    );
}

export default UserContent;