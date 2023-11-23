import React, { useState, useEffect } from "react";
import "./contactform.scss";
import emailjs from "emailjs-com";

const TIME_TO_SHOW_AGAIN = 30 * 60 * 1000; // 30 minutes in milliseconds

function ContactForm() {
  const [messageSent, setMessageSent] = useState(false);

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
    event.preventDefault();

    emailjs
      .sendForm(
        "service_heomey4",
        "template_ttfqpxl",
        event.target,
        "HDUAdKluFJwhepTXI"
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
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="form-container">
      {messageSent ? (
        <div className="message-sent">Your message has been sent successfully!</div>
      ) : (
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
      )}
    </div>
  );
}

export default ContactForm;
