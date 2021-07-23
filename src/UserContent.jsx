import React from 'react';
import Avatar from "./images/avatar.png"
import "bootstrap/dist/css/bootstrap.min.css";
const UserContent = ({ record }) => {
    //  <img src={Avatar}  className="card-img-top" alt="avatarImages" />
    const {name,id,MailID,age,Bg}=record
    return (
        <div className="card" style={{width:"25rem"}}>
          
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
    );
}

export default UserContent;