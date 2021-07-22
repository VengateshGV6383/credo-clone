import React from 'react';
import Avatar from "./images/avatar.png"
import "bootstrap/dist/css/bootstrap.min.css";
const UserContent = (props) => {
    return (
        <div className="card">
            <img src={Avatar} alt="avatarImages" />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <div className="card-text">
                    <div className="row row-cols-2">
                        <h4 className="col">Credo-ID</h4>
                        <h4 className="col">{props.id}</h4>
                    </div>
                    <div className="row row-cols-2">
                        <h4 className="col">Email-id</h4>
                        <h4 className="col">{props.MailID}</h4>
                    </div>
                    <div className="row row-cols-2">
                        <h4 className="col">Age</h4>
                        <h4 className="col">{props.MailID}</h4>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default UserContent;