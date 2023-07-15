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
      <a href="https://github.com/el-jakes">www.github.com/el-jakes</a>
        <button className='mail'>
          <img src={mail} alt="email icon" />
          Email
        </button>
        <button className='linkedin'>
          <img src={linkedin} alt="email icon" />
          LinkedIn
        </button>
    </div>
  );
};

export default Info;
