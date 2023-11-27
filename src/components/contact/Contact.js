import React from "react";
import "./contacs.scss";
import ContactForm from "./ContactForm";
import download from "../../images/icons8-download-button-64.png";

function Contact() {
  return (
    <div className="contact-me" id="contact-me">
      <div className="contact-me-container">
        <div className="contact-left">
          <div className="contact-heading">
            <h2>CONTACT ME</h2>
          </div>
          <div className="contact-desc">
            <span>
              Thinking of a project? <br></br>Reach out to me<br></br> and we
              could do it today!
            </span>
          </div>
        </div>
        <div className="my-form">
          <ContactForm></ContactForm>
        </div>
      </div>
    </div>
  );
}

export default Contact;
