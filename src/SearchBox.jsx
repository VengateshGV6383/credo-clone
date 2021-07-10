import React from 'react';
const SearchBox = (props) => {
    return (  
        
            <form className="ui form" onSubmit={()=>{ window.alert("To be implented with apis")}}>
            <div className="field">
                <label>Type Records to Search</label>
                <input type="text" name="q" placeholder="Search records"/>
            </div>
            <div className="field">
                <div className="ui checkbox">
                        <input type="checkbox" name="fleg-ID" tabIndex="0"/>
                        <label>ID</label>
                </div>
                <div className="ui checkbox" style={{margin:"5px"}}>
                        <input type="checkbox" name="flag-name" tabIndex="0"/>
                        <label>Name</label>
                </div>
                <div className="ui checkbox" style={{margin:"5px"}}>
                        <input type="checkbox" name="flag-mailid" tabIndex="0"/>
                        <label>Mailid</label>
                </div>
            </div>
           
            
            <button type="submit" className="ui primary button"> Search</button>
            </form>
        
  );
}
 
export default SearchBox;