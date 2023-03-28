import React from "react";
import "./Gallery.css";
import firstImg from "../../assets/images/gallery_img/1.jpg";
import secImg from "../../assets/images/gallery_img/2.jpg";
import thirdImg from "../../assets/images/gallery_img/3.jpg";
import forthImg from "../../assets/images/gallery_img/4.jpg";
import fifthImg from "../../assets/images/gallery_img/5.jpg";
import sixImg from "../../assets/images/gallery_img/6.jpeg";

const Gallery = () => {
  return (
    <div className="gallery" id="gallery">
      <div className="gallery-header">
        <span>Gallery</span>
      </div>
      <div className="container">
        <div className="imgDiv">
          <img src={firstImg} alt="" className="imgBlock" />
          <div className="img-text">
            <p className="buttom-left">Image</p>
          </div>
        </div>
        <div className="imgDiv">
          <img src={secImg} alt="" className="imgBlock" />
          <div className="img-text">
            <p className="buttom-left">Image</p>
          </div>
        </div>
        <div className="imgDiv">
          <img src={thirdImg} alt="" className="imgBlock" />
          <div className="img-text">
            <p className="buttom-left">Image</p>
          </div>
        </div>
        <div className="imgDiv">
          <img src={forthImg} alt="" className="imgBlock" />
          <div className="img-text">
            <p className="buttom-left">Image</p>
          </div>
        </div>
        <div className="imgDiv">
          <img src={sixImg} alt="" className="imgBlock" />
          <div className="img-text">
            <p className="buttom-left">Image</p>
          </div>
        </div>
        <div className="imgDiv">
          <img src={sixImg} alt="" className="imgBlock" />
          <div className="img-text">
            <p className="buttom-left">Image</p>
          </div>
        </div>
        <div className="imgDiv">
          <img src={sixImg} alt="" className="imgBlock" />
          <div className="img-text">
            <p className="buttom-left">Image</p>
          </div>
        </div>
        <div className="imgDiv">
          <img src={sixImg} alt="" className="imgBlock" />
          <div className="img-text">
            <p className="buttom-left">Image</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
