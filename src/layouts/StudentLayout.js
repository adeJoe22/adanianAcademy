import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import DashboardSideNav from "../components/dashboard/student/DashboardSideNav";
import styled from "styled-components";
import DashboardHeader from "../components/dashboard/student/DashboardHeader";
import SideBarMobile from "../components/dashboard/student/SideBarMobile";
import HeaderMobile from "../components/dashboard/student/HeaderMobile";

export default function StudentLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const toggle2 = () => setIsOpen2(!isOpen2);
  return (
    <>
      <Container>
        <Head>
          <DashboardHeader toggle={toggle} toggle2={toggle2} />
          <SideBarMobile isOpen={isOpen} toggle={toggle} />
          {/* <HeaderMobile isOpen2={isOpen2} toggle2={toggle2} /> */}
        </Head>

        <Display>
          <SideNav>
            <DashboardSideNav />
          </SideNav>
          <Body>
            <Outlet />
          </Body>
        </Display>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  position: relative;
`;

const SideNav = styled.div`
  width: 250px;
  height: 100%;
  background-color: aliceblue;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;
const Display = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
  display: flex;
  position: absolute;
  top: 70px;
`;

const Head = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  right: 0;
  left: 0;
  z-index: 99;
`;
const Body = styled.div`
  width: calc(100% - 250px);
  overflow-y: scroll;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;
