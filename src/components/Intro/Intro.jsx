import "./intro.css";
import Img from "../../img/Menatwork.gif";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My Name is </h2>
          <h1 className="i-name">Aman Patwal</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">React Developer</div>
              <div className="i-title-item">Node Developer</div>
              <div className="i-title-item">Full Stack Developer</div>
              <div className="i-title-item">Traveller</div>
              <div className="i-title-item">Book Worm</div>
            </div>
          </div>
          <p className="i-description">
            {/* I design and develop services for customers all sizes, specializing
            in creating stylish, modern websites, web servers and online stores
          */}
            Have full stack developer experience in MERN stack and looking for
            some awesome opportunity ,work looks interesting lets connect
          </p>
        </div>

        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
          />
        </svg> */}
      </div>

      <div className="i-right">
        {/* <img
          className="i-img"
          src="https://cdn.dribbble.com/users/1162077/screenshots/4649464/skatter-programmer.gif"
          alt="Working"
        /> */}
        <img className="i-img" src={Img} alt="Working" />
      </div>
    </div>
  );
};

export default Intro;
