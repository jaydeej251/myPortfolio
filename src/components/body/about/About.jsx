import React from "react";
import "./about.css";
import SocialContact from '../../common/social-contact/social-contact';
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
        Hello There ✋,I am,
         <br /> <span className="info-name">Mark Dj Junio</span>.
         <br />  Full Stack Web Developer 
        </div>
        <div className="about-photo">
          <img 
            src={require("../../../assets/full-stack-development.gif")}
            className="picture"
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;