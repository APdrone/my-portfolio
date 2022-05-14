import { useContext } from "react";
import "./about.css";
import { ThemeContext } from "../../context";
import Img from "../../img/manatwork_about.jpg";

const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="about">
      <div className="about-left">
        <div className="about-card bg"></div>
        <div className="about-card">
          {/* <img
            src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="about-img"
          /> */}

          <img src={Img} alt="working men" className="about-img" />
        </div>
      </div>
      <div className="about-right">
        <h1 className="about-title">About Me</h1>
        <p className="about-sub">
          {/* It is a long established fact that a reader will be distracted by the
          readable content. */}
          Completed full stack program at GUVI and possees hands on experience
          in MERN stack and have proficiency in javascript, nodejs and react.
          Also have both automation and manual experience in testing and have
          worked across banking, finance ,legal and healthcare domain and
          understands throughly the process involved in dev, QA and agile
          activities.
        </p>
        <p className="about-desc">
          Skills includes JavaScript,Nodejs, express,MongoDB, Mongoose,
          mySQL,React, Nextjs ,HTML, CSS ,Version control tools (git).
        </p>
        <span>
          <a
            // style={{ backgroundColor: darkMode ? "#f8f9fa" : "#333" }}
            // style={{
            //   backgroundColor: darkMode ? "#f8f9fa" : "#333",
            //   color: darkMode ? "#333" : "#f8f9fa",
            // }}
            // className="resume_link"
            className={`resume_link ${darkMode ? "dark" : "normal"}`}
            href="https://drive.google.com/file/d/15YIuHDb9MvQhvEB6o6Xqu41cHfEI8KL5/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            My Resume
          </a>
        </span>
      </div>
    </div>
  );
};

export default About;
