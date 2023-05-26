import React from "react";
import "../courseStyles.css";
import dummy from "../images/dummy1.jpg";

const Ui = () => {
  return (
    <div className="ui_container">
      <div className="wrapper">
        <div className="ui_card">
          <div className="ui_wrapper">
            <div className="half1">
              <div className="testimony">
                I believe in lifelong learning and Adanian Academy is a great
                place to learn from experts. I've learned a lot and recommend it
                to all my friends
              </div>
              <div className="testifier">Riaz Surti | UI/UX</div>
            </div>
            <div className="half2">
              <img className="img" src={dummy} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ui;
