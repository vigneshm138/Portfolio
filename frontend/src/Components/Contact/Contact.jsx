import React from "react";
import "./Contact.css";

const Contact = () => {
  return <div className="contact_page" id="contact_page">
    <h1>Contact</h1>
    <div className="contact">
        <div className="contact_phone">
            <h5>phone</h5>
            <p>6383863585</p>
        </div>
        <div className="contact_city">
            <h5>city</h5>
            <p>Coimbatore</p>
        </div>
        <div className="contact_email">
            <h5>email</h5>
            <p>vigneshmb138@gmail.com</p>
        </div>
    </div>
    <div className="contact_socialMedia">

    </div>
  </div>;
};

export default Contact;
