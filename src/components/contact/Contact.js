import React from "react";
import "./contacs.scss";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <div className="contact-me">
      <div className="contact-me-container">
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
