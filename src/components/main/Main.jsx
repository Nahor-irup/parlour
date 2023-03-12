import React from "react";
import Header from "../header/Header";
import "./Main.css";

const Main = () => {
  return (
    <div className="main">
      <div className="left-h">
        <Header />
        <div className="main-text">
          <div>
            <span className="stroke-text">Discover</span>
          </div>
          <div>
            <span>Your Beauty.</span>
          </div>
          <div className="main-quotes">
            <span>Beauty is being the best possible version of yourself on the inside and out.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
