import React from "react";
import "./Styles.css";
import { BiHide, BiShow } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const [show, setShow] = React.useState(true);

  const toggle = () => {
    setShow(!show);
  };

  return (
    <div>
      <div className="registerForm_header">
        <p className="registerForm_paragraph">Already have an account?</p>
        <Link to="/login">
          <button className="registerForm_loginButton">Log In</button>
        </Link>
      </div>
      <div className="registerForm_body">
        <div className="registerForm_bodyWrapper">
          <div className="registerForm_bodyHeading">
            <div className="registerForm_bodyHeading_h1">
              Create your free account
            </div>
            <div className="registerForm_bodyHeading_h2">
              See how the world’s best user experiences are created
            </div>
          </div>
          <form className="registerForm_bodyForm">
            <div className="registerForm_bodyForm_wrapInputs">
              <label className="registerForm_bodyForm_labels" htmlFor="mail">
                Email address
              </label>
              <input
                className="registerForm_bodyForm_inputs"
                type="text"
                id="mail"
                placeholder="Example@email.com"
              />
            </div>

            <button className="registerForm_registerButton">Register</button>
          </form>
          <div className="optionStatement">
            <div className="optionStatement_text">OR</div>
          </div>
          <button className="registerForm_registerButton2">
            <FcGoogle style={{ fontSize: "30px", margin: "0 10px" }} />{" "}
            <span>Continue with Google</span>
          </button>
          <div className="foot">
            By signing up, you agree to our communications and usage terms
            Already have an account?{" "}
            <span style={{ color: "orange" }}>Sign in</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
