import React from "react";
import "../courseStyles.css";
import CourseCard from "./sections/sections.courseCard";
import Categories from "./sections/sections.categories";

import { dummyData } from "../dummyData/dummy";

const AvailableCourses = () => {
  return (
    <div className="available_container">
      <div className="available_wrapper">
        <div className="available_wrapCategories">
          <Categories />
        </div>
        <div className="available_wrapCards">
          {dummyData.map((el) => (
            <CourseCard
              names={el.name}
              descriptions={el.description}
              displayPics={el.dp}
              covers={el.cover}
              amounts={el.amount}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvailableCourses;
