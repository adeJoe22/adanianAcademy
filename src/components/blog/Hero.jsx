import React from "react";
import styled from "styled-components";
import face from "./asset/face.jpg";

const Hero = () => {
  return (
    <Container>
      <Wrapper>
        {" "}
        <Left>
          <Wrap>
            <div>By Adanian Academy</div>
            <h1>
              Why Swift UI Should Be On The Rader Of Every Mobile Developer
            </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
              odit dolor quo corporis!
            </p>
            <button>Start Learning Now</button>
          </Wrap>
        </Left>
        <Right>
          <img src={face} alt="img" />
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Hero;

const Container = styled.div`
  width: 100%;
  height: 350px;
  background-color: #e1f4f7;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Right = styled.div`
  height: 100%;
  width: 50%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Left = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const Wrap = styled.div`
  margin-left: 70px;
  div {
    color: #838383;
    font-size: 16px;
  }
  h1 {
    width: 450px;
    margin: 10px 0;
  }
  p {
    width: 500px;
    font-weight: 500;
    font-size: 20px;
  }
  button {
    margin: 20px 0;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: 600;
    background-color: #13a8be;
    border-radius: 5px;
    border: none;
    color: white;
  }
`;
