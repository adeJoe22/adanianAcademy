import React from "react";
import { AvailableCourses, Instructors, SearchBlock, Ui } from "./blocks";

const CoursePage = () => {
  return (
    <>
      <SearchBlock />
      <AvailableCourses />
      <Instructors />
      <Ui />
    </>
  );
};

export default CoursePage;
