import React from 'react';
import SearchBox from './SearchBox';
import './MainContent.css'
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
        },
        {
            id:"5",name:"Samuel",MailID:"Samuel.bardi@yahoo.com",age:"20"
        },
        {
            id:"6",name:"Kishore",MailID:"Kishore.gv@yahoo.com",age:"20"
        },
        {
            id:"7",name:"Kesavan",MailID:"Kesavan.credo@yahoo.com",age:"22"
        }
            ]
    return (  
    
            <div className="main-content">
                   
                    <div className="ui segment search-area">
                        
                    <SearchBox/>
                    </div>
                    <span className="heading">{props.name}'s Record</span>
                <div className="ui segment records">
                
                
                {
                    records.map(item=>{return<Tables {...item} key={item.id}/>})
                }
                    
                </div>
                
                
            </div>
    
    );
}
 
export default MainContent;