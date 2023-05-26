import React from "react";
import styled from "styled-components";

export default function HeaderMobile({ isOpen2, toggle2 }) {
  return (
    <>
      <Container isOpen2={isOpen2} onClick={toggle2}>
        <Wrapper>Mobile Header</Wrapper>
      </Container>
    </>
  );
}

const Container = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 50vh;
  background-color: rgba(233, 233, 233, 0.438);
  align-items: center;
  top: 70px;
  right: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen2 }) => (isOpen2 ? "100%" : "0")};
  top: ${({ isOpen2 }) => (isOpen2 ? "0" : "-50%")};

  @media screen and (max-width: 767px) {
    display: flex;
  }
`;

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 70px;
  left: 0px;
  opacity: ${({ isOpen2 }) => (isOpen2 ? "0" : "100%")};
  background-color: #ffffff;
`;
