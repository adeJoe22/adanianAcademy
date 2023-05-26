import React from "react";
import "./Styles.css";
import img from "./img3.png";
const RegisterImage = () => {
  return (
    <div className="registerImage_container">
      <div className="registerImage_image">
        <img src={img} style={{ width: "500px" }} />
      </div>
      <div className="registerImage_body">
        <div className="registerImage_h1">
          Turn your ambition into a success story
        </div>
        {/* <div className="registerImage_h2">
          Choose from over 100,000 online video.
        </div> */}
      </div>
    </div>
  );
};

export default RegisterImage;
