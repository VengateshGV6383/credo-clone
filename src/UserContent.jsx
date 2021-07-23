import React from 'react';
import Avatar from "./images/avatar.png"
import "bootstrap/dist/css/bootstrap.min.css";
const UserContent = ({ record }) => {
    return (
        <div className="card">
            <img src={Avatar} alt="avatarImages" />
            <div className="card-body">
                <h5 className="card-title">{record.name}</h5>
                <div className="card-text">
                    <div className="row row-cols-2">
                        <h4 className="col">Credo-ID</h4>
                        <h4 className="col">{record.id}</h4>
                    </div>
                    <div className="row row-cols-2">
                        <h4 className="col">Email-id</h4>
                        <h4 className="col">{record.MailID}</h4>
                    </div>
                    <div className="row row-cols-2">
                        <h4 className="col">Age</h4>
                        <h4 className="col">{record.MailID}</h4>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default UserContent;