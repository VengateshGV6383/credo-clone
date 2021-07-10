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
        <div style={{alignSelf:"start",margin:"10px",width:"max-content",flexBasis:"70%"}}>
        <h3>You are visiting {props.name}'s Dashboard </h3>
        <div className="ui segment">
        <SearchBox/>
        </div>
        <div className="ui segment">
        <h3>Records</h3>
        <span style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <h3>ID</h3>
            <h3 style={{transform:"translate(-4 0%,0)"}}>Name</h3>
            <h3>Mailid</h3>
            <h3>Age</h3>

        </span>
        {
            records.map(item=>{return<Tables {...item} id={item.id}/>})
        }
            
        </div>
        </div>
    );
}
 
export default MainContent;