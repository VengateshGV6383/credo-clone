import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar';

const App=()=>{
    return (
        <div>
            <NavBar/>
        </div>
    )
}
ReactDOM.render(<App/>,document.getElementById("root"));