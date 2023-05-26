import React from "react";
import styled from "styled-components";

import { GiHamburgerMenu } from "react-icons/gi";

export default function DashboardSideNav() {
  return (
    <>
      <Container>
        <Wrapper>
          <NavSection>Navigation</NavSection>
        </Wrapper>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #0d395f;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const NavSection = styled.div``;
