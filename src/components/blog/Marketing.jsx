import React from "react";
import styled from "styled-components";
import { Button } from "../Static";
import pics from "../assets/develop.jpg";
import { AiOutlineEye } from "react-icons/ai";
import face from "../assets/face.jpg";
const Marketing = () => {
  return (
    <Container>
      <Wrapper>
        <Top>
          <Top>
            <h1>Marketing Articles</h1>
            <Button />
          </Top>
        </Top>
        <Holder>
          <Card>
            <ImgBox>
              <img src={pics} alt="" />
            </ImgBox>
            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis saepe deleniti aut eos, quod a atque assumenda
              maiores voluptatum exercitationem neque officiis!
            </p>
            <ProHold>
              <PPHold>
                <Pic>
                  <img src={face} alt="" />
                </Pic>
                <span>Nicole Brown</span>
              </PPHold>
              <Hold2>
                <AiOutlineEye size={20} style={{ color: "red" }} />
                <span>28,000</span>
              </Hold2>
            </ProHold>
          </Card>
          <Card>
            <ImgBox>
              <img src={pics} alt="" />
            </ImgBox>
            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis saepe deleniti aut eos, quod a atque assumenda
              maiores voluptatum exercitationem neque officiis!
            </p>
            <ProHold>
              <PPHold>
                <Pic>
                  <img src={face} alt="" />
                </Pic>
                <span>Nicole Brown</span>
              </PPHold>
              <Hold2>
                <AiOutlineEye size={20} style={{ color: "red" }} />
                <span>28,000</span>
              </Hold2>
            </ProHold>
          </Card>
          <Card>
            <ImgBox>
              <img src={pics} alt="" />
            </ImgBox>
            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis saepe deleniti aut eos, quod a atque assumenda
              maiores voluptatum exercitationem neque officiis!
            </p>
            <ProHold>
              <PPHold>
                <Pic>
                  <img src={face} alt="" />
                </Pic>
                <span>Nicole Brown</span>
              </PPHold>
              <Hold2>
                <AiOutlineEye size={20} style={{ color: "red" }} />
                <span>28,000</span>
              </Hold2>
            </ProHold>
          </Card>
        </Holder>
      </Wrapper>
    </Container>
  );
};

export default Marketing;

const Hold2 = styled.div`
  display: flex;
  align-items: center;

  span {
    margin-left: 10px;
  }
`;

const Pic = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 10px;
  /* background-color: red; */
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProHold = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const PPHold = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-left: 10px;
  }
`;

const ImgBox = styled.div`
  width: 100%;
  height: 250px;
  /* background-color: blue; */

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Card = styled.div`
  /* background-color: red; */
  /* border: 1px solid black; */
`;

const Holder = styled.div`
  width: 100%;
  /* height: 350px; */
  /* background-color: red; */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;

  @media screen and (max-width: 500px) {
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: none;
  }
  @media screen and (min-width: 550px) and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    @media screen and (max-width: 500px) {
      font-size: 22px;
    }
  }
`;

const Wrapper = styled.div`
  width: 60%;
  margin-top: 70px;

  @media screen and (max-width: 900px) {
    width: 80%;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
