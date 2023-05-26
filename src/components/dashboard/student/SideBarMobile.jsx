import React from "react";
import styled from "styled-components";

export default function SideBarMobile({ isOpen, toggle }) {
  return (
    <>
      <Container isOpen={isOpen} onClick={toggle}>
        <Wrapper>Mobile Side nav</Wrapper>
      </Container>
    </>
  );
}

const Container = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: rgba(238, 238, 238, 0.342);
  align-items: center;
  top: 0;
  right: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};

  @media screen and (max-width: 767px) {
    display: flex;
  }
`;

const Wrapper = styled.div`
  position: absolute;
  width: 250px;
  height: 100vh;
  top: 70px;
  left: 0px;
  opacity: ${({ isOpen }) => (isOpen ? "0" : "100%")};
  background-color: #242277;
`;
