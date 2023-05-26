import React from "react";
import "./Styles.css";
import { BiHide, BiShow } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [show, setShow] = React.useState(true);

  const toggle = () => {
    setShow(!show);
  };

  return (
    <div>
      <div className="registerForm_header">
        <p className="registerForm_paragraph">Don't have an account?</p>
        <Link to={"/register"}>
          <button className="registerForm_loginButton">Register</button>
        </Link>
      </div>
      <div className="registerForm_body">
        <div className="registerForm_bodyWrapper">
          <div className="registerForm_bodyHeading">
            <div className="registerForm_bodyHeading_h1">
              Log In to your account
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
            <div className="registerForm_bodyForm_wrapInputs">
              <div className="registerForm_bodyForm_wrapLabel">
                <label
                  className="registerForm_bodyForm_labels"
                  htmlFor="password"
                >
                  Password
                </label>
                <div className="forgot">Forgot Password</div>
              </div>
              <div className="inputWithIcon">
                <input
                  className="registerForm_bodyForm_input2"
                  type={show ? "password" : "text"}
                  id="password"
                  placeholder="Enter password"
                />
                <div onClick={toggle} className="inputIcon">
                  {show ? <BiHide /> : <BiShow />}
                </div>
              </div>
            </div>

            <button className="registerForm_registerButton">LogIn</button>
          </form>
          <div className="optionStatement">
            <div className="optionStatement_line">
              <hr />
            </div>
            <div className="optionStatement_text">OR</div>
            <div className="optionStatement_line">
              <hr />
            </div>
          </div>
          <button className="registerForm_registerButton2">
            <FcGoogle style={{ fontSize: "30px", margin: "0 10px" }} />{" "}
            <span>Continue with Google</span>
          </button>
          <div className="foot">
            By logging in, you agree to our communications and usage terms Don't
            have an account? <span style={{ color: "orange" }}>Create One</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
