import React from "react";
import footerLayer from "./layer1.png";
import styled from "styled-components";

export default function Footer() {
  return (
    <>
      <Container>
        <Wrapper>Footer</Wrapper>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 120px;
  background: #001d22 url(${footerLayer});
  background-position: center;
  background-size: contain;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  color: #fff;
`;
