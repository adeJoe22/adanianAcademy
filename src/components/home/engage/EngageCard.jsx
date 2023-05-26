import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function EngageCard({ to, img, children }) {
  return (
    <>
      <Container to={to}>
        <Wrapper>
          <Illustration>
            <img src={img} alt="img" />
          </Illustration>
          <Desc>{children}</Desc>
        </Wrapper>
      </Container>
    </>
  );
}

const Container = styled(Link)`
  width: 300px;
  height: 300px;
  margin: 10px;
  text-decoration: none;
  color: #000;
  transform: scale(1);
  transition: transform 350ms;
  :hover {
    transform: scaleY(1.018);
    box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.3);
    border-radius: 7px;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
`;
const Illustration = styled.div`
  width: 200px;
  height: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Desc = styled.div`
  font-weight: 600;
  font-size: 20px;
`;
