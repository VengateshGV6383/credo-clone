import React from 'react';
const MainContent = (props) => {
    return (  
        <div style={{alignSelf:"start",margin:"10px"}}>
        <h3> Main Content Component I am {props.name}</h3>
        </div>
    );
}
 
export default MainContent;