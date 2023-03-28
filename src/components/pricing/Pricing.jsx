import React from "react";
import "./Pricing.css";
import CheckIcon from "../../assets/images/icons/checked.png"

const Pricing = () => {
  return (
    <div className="pricing-container" id="pricing">
      <div className="pricing-header">
        <span>Pricing</span>
      </div>
      <div className="pricing">
        <div className="price-card">
          <span>Basic Plan</span>
          <span>$45</span>
          <div className="features">
            <div className="feature">
              <img src={CheckIcon} alt="" />
              <span>features</span>
            </div>
            <div className="feature">
              <img src={CheckIcon} alt="" />
              <span>features</span>
            </div>
            <div className="feature">
              <img src={CheckIcon} alt="" />
              <span>features</span>
            </div>
            <div className="feature">
              <img src={CheckIcon} alt="" />
              <span>features</span>
            </div>
          </div>
          <button className="btn">Get Started</button>
        </div>
        <div className="price-card">
          <span>Premium Plan</span>
          <span>$45</span>
          <div className="features">
            <div className="feature">
              <img src={CheckIcon} alt="" />
              <span>Features</span>
            </div>
            <div className="feature">
              <img src={CheckIcon} alt="" />
              <span>Features</span>
            </div>
            <div className="feature">
              <img src={CheckIcon} alt="" />
              <span>Features</span>
            </div>
            <div className="feature">
              <img src={CheckIcon} alt="" />
              <span>Features </span>
            </div>
          </div>
          <button className="btn">Get Started</button>
        </div>
        <div className="price-card">
          <span>Pro Plan</span>
          <span>$45</span>
          <div className="features">
            <div className="feature">
              <img src={CheckIcon} alt="" />
              <span>Features</span>
            </div>
            <div className="feature">
              <img src={CheckIcon} alt="" />
              <span>Features</span>
            </div>
            <div className="feature">
              <img src={CheckIcon} alt="" />
              <span>Features</span>
            </div>
            <div className="feature">
              <img src={CheckIcon} alt="" />
              <span>Features</span>
            </div>
          </div>
          <button className="btn">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
