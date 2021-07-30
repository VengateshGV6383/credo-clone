import React from 'react';
import Graph from "react-apexcharts";
import "./Dashboard.css";
import { useLocation } from 'react-router-dom';
import UserDetails from './UserDetails';
const Chart = (props) => {
    const location=useLocation()
    const goBack=()=>{
        props.history.goBack()
    }

    return (
        <React.Fragment>

            <div className="container-fluid m-1 cotainer-body" >
                    <UserDetails
                        id={location.state?location.state.id:"1"}
                    />
                        <div className="row justify-content-evenly align-items-start" style={{border:"2px solid rgba(0,0,0,.125)",borderRadius:"10px"}}>
        
                                <div className="row row-cols-4 flex m-1 justify-content-evenly macro-details" >
                                    <div  className="col col-12">
                                            <div className="card-body" style={{borderBottom:"2px solid gainsboro"}} >
                                                        <div className="row row-cols-2 justify-content-between">
                                                            <div className="col col-9" style={{fontFamily:"Poppins"}}>
                                                                <h6>{location.state.heading?location.state.heading:"Chart"}</h6>
                                                            </div>
                                                            <div className="col col-3">
                                                                    <button className="btn btn-secondary btn-sm align-self-end" onClick={goBack}>Back</button>
                                                            </div>
                                                        
                                                        </div>
                                                        <div className="row row-cols-2 justify-content-center">    
                                                                        <div className="col col-12">
                                                            
                                                                                    <Graph 
                                                                                        options={                    
                                                                                    {
                                                                                        
                                                                                    legend:{
                                                                                        position:"top",
                                                                                        onItemHover:{
                                                                                            highlightDataSeries:false
                                                                                        }
                                                                                    },
                                                                                    colors:["#D4AC0D","#5DADE2"],
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
                                                                                                speed:1000
                                                                                            }
                                                                                        },
                                                                                        stroke:{
                                                                                        
                                                                                            width:[2,2]
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
                                                                                    type:"line",
                                                                                    name:"Generated Data",
                                                                                    data:location.state.value
                                                                                },{
                                                                                    type:"line",
                                                                                    name:"Static data",
                                                                                    data:[101,137,205,249,299,310,400]
                                                                                }]}
                                                                                        height={300}
                                                                                    />
                                                                        </div>
                                                        </div>
                                                        
                                             </div>
                                        </div>     
                                    </div>

                                   <div className="row row-cols-4  m-1 flex justify-content-evenly macro-details">
                                       
                                       <div className="col col-12">

                                                    <div className="card-body" >
                                                        <div className="row row-cols-2">
                                                                <div className="col col-12">
                                                                            
                                                                        <Graph
                                                                        type="pie"
                                                                    
                                                                        options={{
                                                                        labels:["Glucose","Active Time","Sleep","Walking","Bp","Pulse","Water Consumption"],
                                                                        fill:{
                                                                            color:["#F54949","#18A6AA","#18A4A8","#498BF5","#FD7112","#F54949","#18A448"],
                                                                            type:"solid"
                                                                        },
                                                                        chart:{
                                                                            toolbar:{
                                                                                show:true
                                                                            }
                                                                        },
                                                                        legend:{
                                                                            position:"top",

                                                                        }
                                                                    
                                                                        }}
                                                                        
                                                                        series={[20,30,15,50,60,90,50]}
                                                                        height={300}
                                                                        />
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
 
export default Chart;