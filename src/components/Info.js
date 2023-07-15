import React from "react";
import avatar from "../images/avatar.png";
import mail from "../images/Mail.png";
import linkedin from "../images/linkedin.png";

const Info = () => {
  return (
    <div className="hero">
      <img
        src={avatar}
        alt="Babajide posing with boats and palm trees in the background"
        className="avatar"
      />
      <h1 className="hero-title">Babajide Leke</h1>
      <h2 className="hero-description">Frontend Developer</h2>
      <a href="https://github.com/el-jakes">github.com/el-jakes</a>
      <div className="social-links">
        <button className="mail btn-flex"><img src={mail} alt="" /><span>Email</span></button>
        <button className="linkedin btn-flex"><img src={linkedin} alt="" /><span>LinkedIn</span></button>
      </div>
    </div>
  );
};

export default Info;
