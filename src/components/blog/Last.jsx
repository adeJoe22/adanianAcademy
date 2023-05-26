import React from "react";
import styled from "styled-components";
import face from "./asset/face.jpg";
const Last = () => {
  return (
    <Container>
      <Wrapper>
        <Card>
          <Circle>
            <img src={face} alt="" />
          </Circle>
          <Hold>
            <h4>Become A Teacher</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
              Libero, quaerat?
            </p>
            <button>Apply as a teacher</button>
          </Hold>
        </Card>
        <Card>
          <Circle>
            <img src={face} alt="" />
          </Circle>
          <Hold>
            <h4>Become A Teacher</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
              Libero, quaerat?
            </p>
            <button>Apply as a teacher</button>
          </Hold>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default Last;

const Hold = styled.div`
  margin-left: 20px;
  margin-top: 40px;

  @media screen and (min-width: 550px) and (max-width: 900px) {
    margin-left: 60px;
  }

  @media screen and (max-width: 500px) {
    margin-top: 20px;
  }

  h4 {
    margin: 0;
    margin-bottom: 7px;
    font-size: 21px;

    @media screen and (max-width: 500px) {
      font-size: 18px;
    }
  }

  p {
    margin: 0;

    @media screen and (max-width: 500px) {
      font-size: 14px;
    }
  }

  button {
    margin-top: 15px;
    height: 35px;
    border-radius: 5px;
    background-color: #f55469;
    border: none;
    width: 150px;
    color: white;
  }
`;

const Circle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  margin-left: 20px;
  margin-top: 40px;

  @media screen and (max-width: 500px) {
    margin-top: 20px;
  }

  @media screen and (min-width: 550px) and (max-width: 900px) {
    width: 70px;
    height: 70px;
    margin-left: 40px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Card = styled.div`
  background-color: white;
  display: flex;

  @media screen and (max-width: 500px) {
    display: block;
  }
`;

const Wrapper = styled.div`
  width: 60%;
  height: 200px;
  /* background-color: gold; */
  gap: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: 900px) {
    width: 80%;
    grid-template-rows: repeat(2, 230px);
    grid-template-columns: none;
    margin-top: 30px;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 300px;
  background-color: #ffd9de;
  margin-top: 60px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 900px) {
    height: 540px;
    display: block;
    display: flex;
    align-items: center;
    justify-content: stretch;
    flex-direction: column;
  }
`;
