import React from "react";
import RegisterForm from "../../components/auth/Register.Form";
import RegisterImage from "../../components/auth/Register.Image";
import logo from "./ACADEMY.png";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Register = () => {
  return (
    <Container className="register">
      <Link to={"/"}>
        <div className="registerImage_header">
          <img src={logo} alt={"logo"} style={{ width: "120px" }} />
        </div>
      </Link>
      <div className="registerImage">
        <RegisterImage />
      </div>
      <FormWrap className="registerForm">
        <RegisterForm />
      </FormWrap>
    </Container>
  );
};

export default Register;
const Container = styled.div``;
const FormWrap = styled.div`
  margin-bottom: 30px;
`;
