import React, { useState, useEffect } from "react";
import "./contactform.scss";
import emailjs from "emailjs-com";

const TIME_TO_SHOW_AGAIN = 30 * 60 * 1000; // 30 minutes in milliseconds

function ContactForm() {
  const [messageSent, setMessageSent] = useState(false);
  const [submitting, setIsSubimtting] = useState(false);

  useEffect(() => {
    const sendTime = localStorage.getItem("sendTime");
    const currentTime = new Date().getTime();

    if (sendTime && currentTime - sendTime < TIME_TO_SHOW_AGAIN) {
      setMessageSent(true);

      setTimeout(() => {
        setMessageSent(false);
        localStorage.removeItem("sendTime");
      }, sendTime + TIME_TO_SHOW_AGAIN - currentTime);
    }
  }, []);

  const sendEmail = (event) => {
    setIsSubimtting(true);
    event.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        event.target,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessageSent(true);
          localStorage.setItem("sendTime", new Date().getTime());

          setTimeout(() => {
            setMessageSent(false);
            localStorage.removeItem("sendTime");
          }, TIME_TO_SHOW_AGAIN);
          setIsSubimtting(false);
        },
        (error) => {
          setIsSubimtting(false)
        }
      );
  };

  return (
    <div className="form-container">
      {messageSent ? (
        <div className="message-sent">
          Your message has been sent successfully!
        </div>
      ) : (
        <form className="form" onSubmit={sendEmail}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" required />
          </div>
          <div className="form-group">
            <label htmlFor="textarea">How Can I Help You?</label>
            <textarea
              name="textarea"
              id="textarea"
              rows="10"
              cols="50"
              required
            >
              {" "}
            </textarea>
          </div>
          <button className="form-submit-btn" type="submit">
            {submitting ? "Submitting" : "Submit"}
          </button>
        </form>
      )}
    </div>
  );
}

export default ContactForm;
