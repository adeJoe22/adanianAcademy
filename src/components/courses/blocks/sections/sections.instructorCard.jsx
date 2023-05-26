import React from "react";
import "../../courseStyles.css";

const InstructorCard = ({ name, cover, describe }) => {
  return (
    <div className="instructorCard_container">
      <div>
        <div className="instructorCard_imageCard">
          <img className="img" src={cover} />
        </div>
        <div className="instructor_details">
          <div className="instructor_name">{name}</div>
          <div className="instructor_about">{describe}</div>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
