import React from 'react';
import './Table.css';
const Tables = (props) => {
    const{id,name,age,MailID}=props
    return ( 
        <div className="record-list">

            <ul >
                <li> {id}</li>
                <li> {name}</li>
                <li>{MailID}</li>
                <li>{age}</li>
            </ul>
        </div>
       
     );
}
 
export default Tables;