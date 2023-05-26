import React from "react";
import "../../courseStyles.css";
import DetailComp from "./sections.detailComp";
import Lessons from "./sections.Lessons";

const CourseCard = ({ names, descriptions, displayPics, covers, amounts }) => {
  return (
    <div className="courses_container">
      <div className="courses_wrapper">
        <img className="img" src={covers} alt={covers} />
      </div>
      <div className="courses_description">{descriptions}</div>
      <div className="courses_wrapDetails">
        <div>
          <DetailComp covers={displayPics} names={names} />
        </div>
        <div>
          <Lessons amounts={amounts} />
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
