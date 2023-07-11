import React, { useState } from "react";

import { BsTwitter, BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { AppWrap, MotionWrap, HomeWraper } from "../../wrapper";
import { images } from "../../constants";
import { client } from "../../client";
import "./footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className="head-text">Get In Touch</h2>
      <div className="app__contacts">
        <div className="app__social">
          <div>
            <a
              href="https://github.com/Logahn"
              target="_blank"
              rel="noreferrer"
              className="github app__social"
            >
              {" "}
              <BsGithub />
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/adele-chinda-b6b284192/"
              target="_blank"
              rel="noreferrer"
              className="linkedin app__social"
            >
              {" "}
              <BsLinkedin />
            </a>
          </div>
          <div>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="twitter app__social"
            >
              {" "}
              <BsTwitter />
            </a>
          </div>
          <div>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="instagram app__social"
            >
              {" "}
              <BsInstagram />
            </a>
          </div>
          <div>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="facebook app__social"
            >
              {" "}
              <FaFacebook />
            </a>
          </div>
        </div>
        <div className=" app__footers">
          <div className="app__footer-cards">
            <div className="app__footer-card ">
              <img src={images.gmail} alt="email" />
              <a href="mailto:chindahadele2@gmail.com" className="p1-text">
                chindahadele2@gmail.com
              </a>
            </div>
            <div className="app__footer-card">
              <img src={images.mobile} alt="phone" />
              <a href="tel:+79524257419" className="p1-text">
                8 (952) 425-74-19
              </a>
            </div>
          </div>
          {!isFormSubmitted ? (
            <div className="app__footer-form app__flex">
              <div className="app__flex">
                <input
                  className="p2-text"
                  type="text"
                  placeholder="Your Name"
                  name="username"
                  value={username}
                  onChange={handleChangeInput}
                />
              </div>
              <div className="app__flex">
                <input
                  className="p2-text"
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  value={email}
                  onChange={handleChangeInput}
                />
              </div>
              <div>
                <textarea
                  className="p-text"
                  placeholder="Your Message"
                  value={message}
                  name="message"
                  onChange={handleChangeInput}
                />
              </div>
              <button type="button" className="p-text" onClick={handleSubmit}>
                {!loading ? "Send Message" : "Sending..."}
              </button>
            </div>
          ) : (
            <div>
              <h3 className="head-text">Thank you for getting in touch!</h3>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__plix"
);
