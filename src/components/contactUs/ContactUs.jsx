import React, { useRef } from "react";
import "./Contact_Us.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot,faPhone,faEnvelope } from "@fortawesome/free-solid-svg-icons";
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sk17fto', 'template_ir7npzj', form.current, 'I51dD7Zefeu6wIh9L')
      .then((result) => {
          console.log(result.text);
          alert("Successfuly sent email.")
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section className="contactUs" id="contact">
      <div className="contactUs-header">
        <span>Contact Us</span>
      </div>
      <div className="containerContact">
        <div className="contactInfo">
          <div className="box">
            <div className="icon">
              <FontAwesomeIcon icon={faLocationDot} />
            </div>
            <div className="text">
              <span>Address</span>
              <label>Bhaktapur,5,Nepal</label>
              <label>Bhaktapur,5,Nepal</label>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <div className="text">
              <span>Phone</span>
              <label>+9779813570528</label>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className="text">
              <span>Email</span>
              <label>rohanpuri325@gamil.com</label>
            </div>
          </div>
        </div>
        <div className="contactForm" onSubmit={sendEmail}>
          <form ref={form}>
            <span className="sendMessage">Send Message</span>
            <div className="inputBox">
              <input type="text" name="user_name"  required/>
              <span>Full Name</span>
            </div>
            <div className="inputBox">
              <input type="email" name="user_email"  required/>
              <span>Email</span>
            </div>
            <div className="inputBox">
             <textarea name="user_message" id="" cols="30" rows="10" required></textarea>
              <span>Type your message...</span>
            </div>
            <div className="inputBox">
              <button className="btnSubmit">Send</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
