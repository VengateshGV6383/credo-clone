import React from 'react';
import Avatar from "./images/avatar.png"
import "./Dashboard.css"
import "bootstrap/dist/css/bootstrap.min.css";
const UserContent = ({ record }) => {
    //  <img src={Avatar}  className="card-img-top" alt="avatarImages" />
    const {name,id,MailID,age,Bg}=record
    return (
        <React.Fragment>
        <div className="container m-1 justify-content-evenly align-items-start cotainer-body" >    
            <div className="row row-cols-1 m-1">
                    <div className="col">
                        <img src={Avatar} alt="avatar" className="avatar"/>
                    </div>
            </div>   
            <div className="card m-2 user-detail-card">
              
                <div className="card-body mt-3">
                    <h4 className="card-title">{name}</h4>
                    <div className="card-text">
                        <div className="row row-cols-2">
                            <h6 className="col col-sm-4">Credo-ID</h6>
                            <h6 className="col col-sm-8">{id}</h6>
                        </div>
                        <div className="row row-cols-2">
                            <h6 className="col col-sm-4">Email-id</h6>
                            <h6 className="col col-sm-8">{MailID}</h6>
                        </div>
                        <div className="row row-cols-2">
                            <h6 className="col col-sm-4">Age</h6>
                            <h6 className="col col-sm-8">{age}</h6>
                        </div>
                        <div className="row row-cols-2">
                            <h6 className="col col-sm-4">B.Group</h6>
                            <h6 className="col col-sm-8">{Bg}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>




        </React.Fragment>

       
    );
}

export default UserContent;