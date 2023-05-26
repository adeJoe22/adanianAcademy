import React from "react";
import SearchBlock from "../../components/courses/blocks/blocks.search";
import AvailableCourses from "../../components/courses/blocks/blocks.availableCourses";
import styled from "styled-components";
import Instructors from "../../components/courses/blocks/blocks.instructors";
import Ui from "../../components/courses/blocks/blocks.ui";
const Courses = () => {
  return (
    <>
      <Container>
        <SearchBlock />
        <AvailableCourses />
        <Instructors />
        <Ui />
      </Container>
    </>
  );
};

export default Courses;

const Container = styled.div`
  width: 100%;
`;
