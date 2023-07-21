import React from "react";
import "./contacs.scss";
import ContactForm from "./ContactForm"; 

function Contact() {
  return (
    <div className="contact-me" id="contact-me">
      <div className="contact-me-container">
        <div className="contact-heading">
          <h2>CONTACT ME</h2>
        </div>
        <div className="contact-desc">
          <span>
            Thinking of a project? Reach out to me and we could do it today!
          </span>
        </div>
        <ContactForm></ContactForm>
      </div>
    </div>
  );
}

export default Contact;
