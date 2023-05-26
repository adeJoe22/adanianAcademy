import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: relative;
`;

const CardTitle = styled.div`
  font-size: 40px;
  font-weight: 600;
  width: 500px;
  margin-bottom: 10px;
  color: ${({ color }) => color};
`;

const CardText = styled.p`
  font-size: 18px;
  width: 600px;
  margin-bottom: 20px;
  color: ${({ color }) => color};
`;

const CardImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const GradientLayer = styled.div`
  background: ${({ bcg }) => bcg};
  width: 100%;
  height: 100%;
  z-index: 50;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  margin-left: 70px;
`;
const CarouselCard = ({ data, isActive }) => {
  const { title, description, image, background, color } = data;

  return (
    <CardContainer style={{ opacity: isActive ? 1 : 0.5 }}>
      <CardImage src={image} alt={title} />
      <GradientLayer bcg={background}>
        <Wrapper>
          <CardTitle color={color}>{title}</CardTitle>
          <CardText color={color}>{description}</CardText>
        </Wrapper>
      </GradientLayer>
    </CardContainer>
  );
};

export default CarouselCard;
