import React from "react";
import "./contactform.scss";
import emailjs from 'emailjs-com';

function ContactForm() {
  const sendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm('service_7kzxz87', 'template_jih3xin', event.target, 'Hwy3DTSecMURqGo0X')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={sendEmail}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required="" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" required="" />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject" required="" />
        </div>
        <div className="form-group">
          <label htmlFor="textarea">How Can I Help You?</label>
          <textarea
            name="textarea"
            id="textarea"
            rows="10"
            cols="50"
            required=""
          >
            {" "}
          </textarea>
        </div>
        <button className="form-submit-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
