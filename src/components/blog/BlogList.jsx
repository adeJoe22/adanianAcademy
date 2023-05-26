import React from "react";
import styled from "styled-components";
import ui from "./asset/ux2.jpg";
import ux from "./asset/ux.jpg";
import seo from "./asset/seo.jpg";
import develop from "./asset/develop.jpg";

const BlogList = () => {
  return (
    <Container>
      <Wrapper>
        <Top>
          <h1>Read Our Blog List</h1>
          <Button>Start now</Button>
        </Top>
        <Under>
          <Box>
            <img src={ui} alt="" />
            <div>UI design</div>
          </Box>
          <Box>
            <img src={ux} alt="" />
            <div>UX design</div>
          </Box>
          <Box>
            <img src={seo} alt="" />
            <div>SEO</div>
          </Box>
          <Box>
            <img src={develop} alt="" />
            <div>Development</div>
          </Box>
        </Under>
      </Wrapper>
    </Container>
  );
};

export default BlogList;

const Box = styled.div`
  width: 260px;
  height: 330px;
  margin: 10px;
  box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  position: relative;

  div {
    position: absolute;
    right: 0;
    bottom: 0;
    padding: 10px;
    background-color: #13a8be;
    font-weight: 600;
    font-size: 18px;
    color: #fff;
    border-radius: 0 0 5px 0;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
`;

const Under = styled.div`
  width: 100%;
  height: 380px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Top = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    margin-left: 70px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  height: 500px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #13a8be;
  border-radius: 4px;
  border: none;
  color: white;
  font-weight: 600;
  font-size: 16px;
  margin-right: 70px;
`;
