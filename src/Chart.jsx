import React from 'react';
import Graph from "react-apexcharts";
const Chart = (props) => {
    return (
    
            <div  className="col col-12">
                <div className="card-body " style={{border:"1px solid gainsboro",borderRadius:"10px"}}>
                    <div className="row row-cols-2 ">
                        <div className="col col-9" style={{fontFamily:"Poppins"}}>
                            <h6>{props.heading}</h6>
                        </div>
                        <div className="col col-3 align-self-end">
                                <button className="btn btn-secondary btn-sm " onClick={()=>props.history.goBack()} >Back</button>
                        </div>
                      
                    </div>
                    <div className="row row-cols-2">
                    <div className="col col-12">
                           
                           <Graph 
                               options={                    
                           {
                           legend:{
                               position:"top"
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
                                       speed:800
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
                           data:props.value
                       },{
                           type:"column",
                           name:"Static data",
                           data:[101,137,205,249,299,310,400]
                       }]}
                               height={300}
                           />
                       </div>
                    </div>
               </div>
             </div>
        
                    
      );
}
 
export default Chart;