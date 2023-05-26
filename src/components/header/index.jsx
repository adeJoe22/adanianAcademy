import React from "react";
import styled from "styled-components";
import NavMenu from "./NavMenu";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "./ACADEMY.png";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Logo to="/">
          <img src={logo} alt="adanian-academy" />
        </Logo>

        <Navigations>
          <NavMenu title="Home" address="/" />
          <NavMenu title="Courses" address="/courses" />
          <NavMenu title="Contact" address="/contact" />
          <NavMenu title="Blog" address="/blog" />
          <NavMenu title="Become an Instructor" address="/instructor" />
        </Navigations>

        <CTA>
          <Search to="/courses">
            <FiSearch />
          </Search>
          <Register to="/register">Register</Register>
        </CTA>
      </Wrapper>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 70px;
  top: 0;
  /* margin-top: -70px; */
  z-index: 10;
  transition: all 350ms ease-in-out;
  /* background-color: aliceblue; */
`;

const Wrapper = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  margin-left: 70px;
  display: flex;
  align-items: center;
  width: 120px;
  height: 48px;
  img {
    width: 100%;
    height: 100%;
  }
`;
const Navigations = styled.div`
  display: flex;
  align-items: center;
`;
const CTA = styled.div`
  margin-right: 70px;
  display: flex;
  align-items: center;
`;

const Search = styled(Link)`
  font-size: 25px;
  margin: 0 10px;
`;
const Register = styled(Link)`
  padding: 10px 20px;
  border-radius: 4px;
  color: #fff;
  background-color: #13a8be;
  font-weight: 600;
  font-size: 15px;
  margin: 0 10px;
  letter-spacing: 1px;
  text-decoration: none;
`;
