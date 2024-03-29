import React from "react";
import "./Service.css";
import Hair from "../../assets/images/services/hair.png"
import SkinCare from "../../assets/images/services/skin_care.jpg"
import Nail from "../../assets/images/services/nail.png"
import Makeup from "../../assets/images/services/makeup.jpg"
const Service = () => {
  return (
    <div className="service" id="service">
      <div className="service-header">
        <span>Services</span>
      </div>
      <div className="service-category">
        <div className="category">
          <img src={Hair} alt="" />
          <span>1st item</span>
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </span>
        </div>
        <div className="category">
          <img src={Makeup} alt="" />
          <span>1st item</span>
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </span>
        </div>
        <div className="category">
          <img src={Nail} alt="" />
          <span>1st item</span>
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </span>
        </div>
        <div className="category">
          <img src={SkinCare} alt="" />
          <span>1st item</span>
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Service;
