import React from "react";
import "../../courseStyles.css";
import { BsPlayFill } from "react-icons/bs";
const Lessons = ({ amounts }) => {
  return (
    <div className="detailComp_container">
      <div className="detailComp_icon">
        <BsPlayFill />
      </div>
      <div className="detailComp_lesson">{amounts} Lessons</div>
    </div>
  );
};

export default Lessons;
