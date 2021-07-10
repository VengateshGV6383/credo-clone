import React from 'react';
import SearchBox from './SearchBox';
import Tables from './Tables';
const MainContent = (props) => {
    const records=[
        {
            id:"1",name:"Vengatesh",MailID:"Vengat.gv@yahoo.com",age:"20"
        },
        {
            id:"2",name:"Archana Devi",MailID:"Archana.devi@yahoo.com",age:"21"
        },
        {
            id:"3",name:"Badrinath",MailID:"Badri.credo@yahoo.com",age:"22"
        },
        {
            id:"4",name:"Balaji",MailID:"Balaji.credo@yahoo.com",age:"22"
        }
            ]
    return (  
        <div style={{margin:"auto",width:"max-content",flexBasis:"70%"}}>
        <h2 style={{margin:"10px",fontSize:"1rem"}}>You are visiting {props.name}'s Dashboard </h2>
            <div className="ui segment">
            <SearchBox/>
            </div>
        <div className="ui segment">
        <h3>Records</h3>
        
        {
            records.map(item=>{return<Tables {...item} key={item.id}/>})
        }
            
        </div>
        </div>
    );
}
 
export default MainContent;