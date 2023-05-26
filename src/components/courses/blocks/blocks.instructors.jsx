import React from "react";
import InstructorCard from "./sections/sections.instructorCard";
import InstructorHead from "./sections/sections.instructorHead";
import "../courseStyles.css";
import { dummyData2 } from "../dummyData/dummy";

const Instructors = () => {
  return (
    <div className="available_container">
      <div className="available_wrapper">
        <div className="available_wrapCategories">
          <InstructorHead />
        </div>
        <div className="available_wrapCards">
          {dummyData2.map((el) => (
            <InstructorCard
              name={el.name}
              describe={el.description}
              cover={el.cover}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instructors;
