import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './Dashboard.css';

const DashboardCard = ({glucose,sleep,pulse,sugar,steps,weight,bp,active,water,getGrpahData}) => {
const date=new Date()

const handleOnclick=(value,heading)=>{
    const arr=[];
    let i=1;
    for(i=1;i<=7;i++){
        arr.push(i+value)
    }
    
    
    getGrpahData(arr,heading);

   
}

    return (  
        <React.Fragment>
         <div 
        className="col-12 col-lg-4 card m-2 user-detail-card"
        onClick={()=>handleOnclick(glucose,"Glucose")}
        >
        <div className="card-body mt-1 param-card">
           <div className="row row-cols-2 param-head">
               <span className="col col-6">
                    <i 
                    className={`tint icon`} 
                    style={{color:`#49ABF5`}}>

                    </i>
                 </span>
                <span className="col col-6">
                    <span 
                    className="param-head align-self-start" 
                    style={{color:`#49ABF5`}}>
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
                    <span
                     className="col col-6"  
                    style={{color:`#49ABF5`}}>
                               {`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}
                    </span>
               </div>
               <div className="row row-cols-2 ">
                    <span className="col col-6">
                            Readings
                    </span>
                    <span className="col col-6"  style={{color:`#49ABF5`}}>
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
        <div 
        className="col-12 col-lg-4 card m-2 user-detail-card"
        onClick={()=>handleOnclick(pulse,"Pulse Rate")}
        >
        <div className="card-body mt-1 param-card">
           <div className="row row-cols-2 param-head">
               <span className="col col-6">
                    <i 
                    className={`heartbeat icon`} 
                    style={{color:`#F54949`}}>

                    </i>
                 </span>
                <span className="col col-6">
                    <span 
                    className="param-head align-self-start" 
                    style={{color:`#F54949`}}>
                        <small>
                            Pulse
                        </small>
                    </span>
                </span>
           </div>
           <div className="card-text param-value">
           <div className="row row-cols-2 ">
                    <span className="col col-6">
                            Active Date
                    </span>
                    <span
                     className="col col-6"  
                    style={{color:`#F54949`}}>
                               {`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}
                    </span>
               </div>
               <div className="row row-cols-2 ">
                    <span className="col col-6">
                            Ratings
                    </span>
                    <span className="col col-6"  style={{color:`#F54949`}}>
                               {pulse}
                    </span>
               </div>
               <div className="row row-cols-2">
                    <span className="col col-sm-6">
                            Target
                    </span>
                    <span className="col col-sm-6 " style={{color:"#F54949"}}>
                            N/A
                    </span>
               </div>
           </div>
        </div>
    </div>
    <div 
        className="col-12 col-lg-4 card m-2 user-detail-card"
        onClick={()=>handleOnclick(weight,"Weight")}
        >
        <div className="card-body mt-1 param-card">
           <div className="row row-cols-2 param-head">
               <span className="col col-6">
                    <i 
                    className={`weight icon`} 
                    style={{color:`#18A6AA`}}>

                    </i>
                 </span>
                <span className="col col-6">
                    <span 
                    className="param-head align-self-start" 
                    style={{color:`#18A6AA`}}>
                        <small>
                            Weight
                        </small>
                    </span>
                </span>
           </div>
           <div className="card-text param-value">
           <div className="row row-cols-2 ">
                    <span className="col col-6">
                            Active Date
                    </span>
                    <span
                     className="col col-6"  
                    style={{color:`#18A6AA`}}>
                               {`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}
                    </span>
               </div>
               <div className="row row-cols-2 ">
                    <span className="col col-6">
                            Kilograms
                    </span>
                    <span className="col col-6"  style={{color:`#18A6AA`}}>
                               {weight}
                    </span>
               </div>
               <div className="row row-cols-2">
                    <span className="col col-sm-6">
                            Target
                    </span>
                    <span className="col col-sm-6 " style={{color:"#18A6AA"}}>
                            target
                    </span>
               </div>
           </div>
        </div>
    </div>
    <div 
        className="col-12 col-lg-4 card m-2 user-detail-card"
        onClick={()=>handleOnclick(sleep,"Sleeping Hours")}
        >
        <div className="card-body mt-1 param-card">
           <div className="row row-cols-2 param-head">
               <span className="col col-6">
                    <i 
                    className={`moon icon`} 
                    style={{color:`#18A4A8`}}>

                    </i>
                 </span>
                <span className="col col-6">
                    <span 
                    className="param-head align-self-start" 
                    style={{color:`#18A4A8`}}>
                        <small>
                            Sleep
                        </small>
                    </span>
                </span>
           </div>
           <div className="card-text param-value">
           <div className="row row-cols-2 ">
                    <span className="col col-6">
                            Active Date
                    </span>
                    <span
                     className="col col-6"  
                    style={{color:`#18A4A8`}}>
                               {`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}
                    </span>
               </div>
               <div className="row row-cols-2 ">
                    <span className="col col-6">
                            Hours
                    </span>
                    <span className="col col-6"  style={{color:`#18A4A8`}}>
                               {sleep}
                    </span>
               </div>
               <div className="row row-cols-2">
                    <span className="col col-sm-6">
                            Target
                    </span>
                    <span className="col col-sm-6 " style={{color:"#18A4A8"}}>
                        N/A
                    </span>
               </div>
           </div>
        </div>
    </div>
    <div 
        className="col-12 col-lg-4 card m-2 user-detail-card"
        onClick={()=>handleOnclick(11,"Sugar")}
        >
        <div className="card-body mt-1 param-card">
           <div className="row row-cols-2 param-head">
               <span className="col col-6">
                    <i 
                    className={`tint icon`} 
                    style={{color:`#498BF5`}}>

                    </i>
                 </span>
                <span className="col col-6">
                    <span 
                    className="param-head align-self-start" 
                    style={{color:`#498BF5`}}>
                        <small>
                            Sugar
                        </small>
                    </span>
                </span>
           </div>
           <div className="card-text param-value">
           <div className="row row-cols-2 ">
                    <span className="col col-6">
                            Active Date
                    </span>
                    <span
                     className="col col-6"  
                    style={{color:`#498BF5`}}>
                               {`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}
                    </span>
               </div>
               <div className="row row-cols-2 ">
                    <span className="col col-6">
                            Asy/Dsy
                    </span>
                    <span className="col col-6"  style={{color:`#498BF5`}}>
                               {sugar}
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
    <div 
        className="col-12 col-lg-4 card m-2 user-detail-card"
        onClick={()=>handleOnclick(steps,"Steps")}
        >
        <div className="card-body mt-1 param-card">
           <div className="row row-cols-2 param-head">
               <span className="col col-6">
                    <i 
                    className={`hourglass half icon`} 
                    style={{color:`#FD7112`}}>

                    </i>
                 </span>
                <span className="col col-6">
                    <span 
                    className="param-head align-self-start" 
                    style={{color:`#FD7112`}}>
                        <small>
                            Steps
                        </small>
                    </span>
                </span>
           </div>
           <div className="card-text param-value">
           <div className="row row-cols-2 ">
                    <span className="col col-6">
                            Active Date
                    </span>
                    <span
                     className="col col-6"  
                    style={{color:`#FD7112`}}>
                               {`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}
                    </span>
               </div>
               <div className="row row-cols-2 ">
                    <span className="col col-6">
                            Kilometers
                    </span>
                    <span className="col col-6"  style={{color:`#FD7112`}}>
                               {steps}
                    </span>
               </div>
               <div className="row row-cols-2">
                    <span className="col col-sm-6">
                            Target
                    </span>
                    <span className="col col-sm-6 " style={{color:"#FD7112"}}>
                            N/A
                    </span>
               </div>
           </div>
        </div>
    </div>
    <div 
        className="col-12 col-lg-4 card m-2 user-detail-card"
        onClick={()=>handleOnclick(bp,"Blood Pressure")}
        >
        <div className="card-body mt-1 param-card">
           <div className="row row-cols-2 param-head">
               <span className="col col-6">
                    <i 
                    className={`thermometer half icon`} 
                    style={{color:`#F54949`}}>

                    </i>
                 </span>
                <span className="col col-6">
                    <span 
                    className="param-head align-self-start" 
                    style={{color:`#F54949`}}>
                        <small>
                            Blood Pressure
                        </small>
                    </span>
                </span>
           </div>
           <div className="card-text param-value">
           <div className="row row-cols-2 ">
                    <span className="col col-6">
                            Active Date
                    </span>
                    <span
                     className="col col-6"  
                    style={{color:`#F54949`}}>
                               {`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}
                    </span>
               </div>
               <div className="row row-cols-2 ">
                    <span className="col col-6">
                            Readings
                    </span>
                    <span className="col col-6"  style={{color:`#F54949`}}>
                               {bp}
                    </span>
               </div>
               <div className="row row-cols-2">
                    <span className="col col-sm-6">
                            Target
                    </span>
                    <span className="col col-sm-6 " style={{color:"#F54949"}}>
                        N/A
                    </span>
               </div>
           </div>
        </div>
    </div>
    <div 
        className="col-12 col-lg-4 card m-2 user-detail-card"
        onClick={()=>handleOnclick(active,"Active Timings")}
        >
        <div className="card-body mt-1 param-card">
           <div className="row row-cols-2 param-head">
               <span className="col col-6">
                    <i 
                    className={`clock icon`} 
                    style={{color:`#18A448`}}>

                    </i>
                 </span>
                <span className="col col-6">
                    <span 
                    className="param-head align-self-start" 
                    style={{color:`#18A448`}}>
                        <small>
                            Active Hours
                        </small>
                    </span>
                </span>
           </div>
           <div className="card-text param-value">
           <div className="row row-cols-2 ">
                    <span className="col col-6">
                            Active Date
                    </span>
                    <span
                     className="col col-6"  
                    style={{color:`#18A448`}}>
                               {`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}
                    </span>
               </div>
               <div className="row row-cols-2 ">
                    <span className="col col-6">
                            Hours
                    </span>
                    <span className="col col-6"  style={{color:`#18A448`}}>
                               {active}
                    </span>
               </div>
               <div className="row row-cols-2">
                    <span className="col col-sm-6">
                            Target
                    </span>
                    <span className="col col-sm-6 " style={{color:"#18A448"}}>
                            N/A
                    </span>
               </div>
           </div>
        </div>
    </div>
    <div 
        className="col-12 col-lg-4 card m-2 user-detail-card"
        onClick={()=>handleOnclick(water,"Water Consumption")}
        >
        <div className="card-body mt-1 param-card">
           <div className="row row-cols-2 param-head">
               <span className="col col-6">
                    <i 
                    className={`tint icon`} 
                    style={{color:`#49ABF5`}}>

                    </i>
                 </span>
                <span className="col col-6">
                    <span 
                    className="param-head align-self-start" 
                    style={{color:`#49ABF5`}}>
                        <small>
                            Water
                        </small>
                    </span>
                </span>
           </div>
           <div className="card-text param-value">
           <div className="row row-cols-2 ">
                    <span className="col col-6">
                            Active Date
                    </span>
                    <span
                     className="col col-6"  
                    style={{color:`#49ABF5`}}>
                               {`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}
                    </span>
               </div>
               <div className="row row-cols-2 ">
                    <span className="col col-6">
                            Liter/day
                    </span>
                    <span className="col col-6"  style={{color:`#49ABF5`}}>
                               {water}
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
   
    </React.Fragment>
    );
}
 
export default DashboardCard;