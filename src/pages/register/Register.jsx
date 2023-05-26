import React from "react";
import { RegisterForm, RegisterImage } from "../components";
import "../Styles.css";

const Register = () => {
  return (
    <div className="register">
      <div className="registerImage_header">🎃 Skilify</div>
      <div className="registerImage">
        <RegisterImage />
      </div>
      <div className="registerForm">
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
