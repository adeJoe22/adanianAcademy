import React from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdNotifications } from "react-icons/md";
import logo from "./logo.png";

export default function DashboardHeader({ toggle, toggle2 }) {
  return (
    <>
      <Container>
        <Wrapper>
          <LogoWrap>
            <Hamburger>
              <GiHamburgerMenu onClick={toggle} />
            </Hamburger>
            <Logo>
              <img src={logo} />
            </Logo>
          </LogoWrap>
          <NotificationWrap>
            <Notification>
              <MdNotifications />
            </Notification>
            <StudentProfile>
              <UserImage />
              <NameAndViewProfile>
                <UserName>Bill Smith</UserName>
              </NameAndViewProfile>
            </StudentProfile>
          </NotificationWrap>
          <Hamburger>
            <GiHamburgerMenu onClick={toggle2} />
          </Hamburger>
        </Wrapper>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  background-color: #7eb9ec;
  height: 70px;
  justify-content: center;
  align-items: center;
  color: white;
  @media screen and (max-width: 767px) {
    background-color: #ffffff;
    color: #000000;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* @media screen and (max-width: 500px) {
    width: 90%;
  } */
`;
const LogoWrap = styled.div`
  width: 250px;
  height: 70px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Logo = styled.div`
  width: 120px;
  height: 48px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const NotificationWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 260px;
  height: 100%;
`;
const Notification = styled.div`
  width: 60px;
  height: 100%;
  border-left: 1px solid;
  border-right: 1px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const UserName = styled.div`
  font-size: 16px;
  margin-bottom: 8px;
  font-weight: 500;
`;

const NameAndViewProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const UserImage = styled.img`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
  background-color: white;
`;

const StudentProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 100%;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const Hamburger = styled.div`
  display: none;
  @media screen and (max-width: 767px) {
    display: block;
    font-size: 30px;
    width: 60px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
