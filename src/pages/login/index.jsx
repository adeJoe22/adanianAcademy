import React from "react";
import LoginForm from "../../components/auth/Login.Form";
import RegisterImage from "../../components/auth/Register.Image";
import logo from "./ACADEMY.png";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Login = () => {
  return (
    <>
      <Container>
        <div className="register">
          <Link to="/">
            <div className="registerImage_header">
              <img src={logo} style={{ width: "120px" }} />
            </div>
          </Link>

          <div className="registerImage">
            <RegisterImage />
          </div>
          <FormWrap className="registerForm">
            <LoginForm />
          </FormWrap>
        </div>
      </Container>
    </>
  );
};

export default Login;

const Container = styled.div``;
const FormWrap = styled.div`
  margin-bottom: 30px;
`;
