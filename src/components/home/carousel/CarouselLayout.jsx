import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import withCarousel from "./withCarousel";
import CarouselCard from "./CarouselCard";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import virtual from "./../virtual.jpg";
import instructor from "./../instructor.jpg";
import library from "./../library.jpg";
import blog from "./../blog.jpg";
import partner from "./../partner.jpg";

const CarouselContainer = styled.div`
  height: 85vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: aliceblue;
`;

const CardContainer = styled.div`
  height: 100%;
  width: ${({ width }) => `${width}%`};
  overflow: hidden;
  /* background-color: red; */
`;

const CardList = styled.div`
  height: 100%;
  width: ${({ width, length }) => `${width * length}px`};
  display: flex;
  transition: transform 250ms ease-out;
  transform: ${({ currentIndex, width }) =>
    `translateX(-${currentIndex * width}px)`};
`;

const Button = styled.button`
  /* padding: 10px; */
  height: 26px;
  margin: 10px;
  font-size: 26px;
  background-color: transparent;
  border: none;
  color: #2e2e2e;
  cursor: pointer;
  :hover {
    background-color: #d1d1d167;
    color: #fff;
  }
`;

const IndexSelectorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IndexButton = styled.button`
  height: 12px;
  width: 12px;
  margin: 5px;
  font-size: 18px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  ${({ active }) => active && "background-color: #2e2e2e; color: #fff;"};
`;

const data = [
  {
    image: virtual,
    color: "#475300",
    background: `linear-gradient(to right, #c3d460 45%, transparent)`,
    title: "Actuating the Tech Revolution in Africa",
    description:
      "Adanian Academy, helps you take your career to the next level...",
  },
  {
    image: blog,
    color: "#ffffff",
    background: `linear-gradient(to right, #8EB5C9 45%, transparent)`,
    title: "Read the Adanian Academy Blog",
    description: "Read the latest news and information on our blog",
  },
  {
    image: partner,
    background: `linear-gradient(to right, #ee8eee 35%, transparent)`,
    title: "Partners: Learn more about Adanian Academy Partners",
    description:
      "Adanian Academy works with institutions, educators, and partners across the globe to help millions of students become technology innovators and leaders.",
  },
  {
    image: library,
    background: `linear-gradient(to right, #C0C0C0 45%, transparent)`,
    title: "Check out our Library of timeless Courses",
    description: "Access the available courses for your learning journey.",
  },
  {
    image: instructor,
    color: "#fff",
    background: `linear-gradient(to right, #263641 45%, transparent)`,
    title: "Accessible, qualified world class Instructors",
    description:
      "Adanian Academy provides you with hands-on professional intructors, that will transform you and give meaning to your career",
  },
];

const CardCarousel = ({
  data,
  currentIndex,
  handleNext,
  handlePrev,
  setCurrentIndex,
}) => {
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSelectIndex = (index) => {
    if (index >= 0 && index < data.length) {
      setCurrentIndex(index);
    }
  };

  return (
    <CarouselContainer>
      <CardContainer width={100}>
        <CardList
          currentIndex={currentIndex}
          width={width}
          length={data.length}
        >
          {data.map((cardData, index) => (
            <div
              key={index}
              style={{
                height: "100%",
                width: `${width}%`,
              }}
            >
              {index === currentIndex && cardData && (
                <CarouselCard data={cardData} isActive={true} />
              )}
            </div>
          ))}
        </CardList>
      </CardContainer>
      <Pointers>
        <Button onClick={handlePrev}>
          <FaChevronLeft />
        </Button>
        <IndexSelectorContainer>
          {data.map((_, index) => (
            <IndexButton
              key={index}
              onClick={() => handleSelectIndex(index)}
              disabled={index === currentIndex}
              active={index === currentIndex}
            >
              {/* {index + 1} */}
            </IndexButton>
          ))}
        </IndexSelectorContainer>
        <Button onClick={handleNext}>
          <FaChevronRight />
        </Button>
      </Pointers>
    </CarouselContainer>
  );
};

export default withCarousel(CardCarousel, data);

const Pointers = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  height: 35px;
  bottom: 20px;
  left: auto;
  right: auto;
`;
