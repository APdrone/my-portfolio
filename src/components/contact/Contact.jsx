import React, { useContext, useRef, useState } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bqmbabv",
        "template_tjrk76n",
        formRef.current,
        "-IniWCOCdry5wYVzW"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          {/* <h1 className="c-title">Lets discuss your project</h1> */}
          <h1 className="c-title">Lets connect for hiring</h1>
          <div className="c-info">
            <div className="c-info-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="c-icon"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M14.414 7l3.293-3.293a1 1 0 00-1.414-1.414L13 5.586V4a1 1 0 10-2 0v4.003a.996.996 0 00.617.921A.997.997 0 0012 9h4a1 1 0 100-2h-1.586z" />
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              {/* +1 1234 556 76372 */}
              +91 143115153
            </div>
            <div className="c-info-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="c-icon"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z" />
                <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
              </svg>
              {/* contact@lama.dev */}
              dummy@gmail.com
            </div>
            <div className="c-info-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="c-icon"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              {/* 245 king street, Touteria Victoria 8520 */}
              India
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            {/* <b>
            What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me. */}
            Please fill the details and get in touch. Always available for
            freelancing if the right project comes along
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode ? "#333" : "#f8f9fa" }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{ backgroundColor: darkMode ? "#333" : "#f8f9fa" }}
              type="text"
              placeholder="Subject"
              name="subject"
            />
            <input
              style={{ backgroundColor: darkMode ? "#333" : "#f8f9fa" }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{ backgroundColor: darkMode ? "#333" : "#f8f9fa" }}
              name="message"
              rows="5"
              placeholder="Message"
            />
            <button>Submit</button>
            {done && "Thank you"}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
