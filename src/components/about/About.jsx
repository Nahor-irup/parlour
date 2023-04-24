import React from "react";
import "./About.css";
import Amy from "../../assets/images/amy1.jpg";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-content">
        <div className="left-a">
          <img className="left-a-img" src={Amy} alt="" />
        </div>
        <div className="right-a">
          <span>About Me</span>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
            quidem ut modi ratione! Aspernatur dicta, sed nostrum minus optio
            modi corporis aliquam perspiciatis, provident maiores dolor quod
            dolores eligendi laborum? Sapiente quis porro ea. Perferendis
            expedita quia cum quaerat? Ipsam eius vero sequi fugit nesciunt
            esse. Magni, nisi, ratione repudiandae ex expedita et alias
            laboriosam voluptate id doloremque quo sit!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
