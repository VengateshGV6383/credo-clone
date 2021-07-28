import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './Dashboard.css';
import { useLocation } from 'react-router-dom';

const VitalCards = (props) => {
const date=new Date()
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
         MC:"Allergy T2",
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
const arr=records.filter(item=>item.id===props.id)
const {glucose,sleep,pulse,sugar,steps,weight,bp,active,water}=arr[0]
const handleOnclick=(value,heading)=>{
    const arr=[];
    let i=1;
    for(i=1;i<=7;i++){
        arr.push(i+value)
    }
    props.history.push(`${props.location.pathname}/Chart`,{id:props.id,value:arr,heading:heading})
   
   console.log(value,heading);
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
 
export default VitalCards;