import React from "react";
import styled from "styled-components";
import EngageCard from "./EngageCard";
import img from "./institution.png";
import img2 from "./partners.png";
import img3 from "./student.png";

export default function Engage() {
  return (
    <>
      <Container>
        <Wrapper>
          <Description>
            <h3>Engage</h3>
            <p>Something should be here</p>
          </Description>
          <Cards>
            <EngageCard img={img} children={"Institutions"} />
            <EngageCard img={img2} children={"Partnership"} to={"/partners"} />
            <EngageCard img={img3} children={"Student"} to={"/login"} />
          </Cards>
        </Wrapper>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 530px;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Description = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h3 {
    font-weight: 600;
    font-size: 28px;
    margin-bottom: 10px;
  }
  p {
    font-size: 16px;
  }
`;
const Cards = styled.div`
  display: flex;
`;
