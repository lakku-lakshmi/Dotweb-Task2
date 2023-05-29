
import React from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
// import MainButton from "../../Components/Button";
// import BasicTextFields from "../../Components/Input";
// import "../../Assets/Style/Login.css";
// import login from "../../Assets/Images/login.svg";
import { setUserInfo } from "../store/reducer";
import { useDispatch, useSelector } from "react-redux";

export const SignUp = () => {
  console.log("================================")
  const { userinfo } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const [signupDetails, setSignupDetails] = React.useState({
    username:"",
    email:"",
    password:"",
  });

  const changeHandler = (e) => {
        setSignupDetails({ ...signupDetails, [e.target.name]: e.target.value });
  };

  const SignUpSubmitHandler = async () => {
    if (
      signupDetails.name !== "" &&
      signupDetails.name !== undefined &&
      signupDetails.phone !== "" &&
      signupDetails.phone !== undefined &&
      signupDetails.email !== "" &&
      signupDetails.email !== undefined
    ) {
      await dispatch(setUserInfo({ ...signupDetails }));
      console.log("..........userinfo",userinfo);
    } else {
        console.log("...fill all fields")
    }
  }; // submitHandler

  return (
    <div className="login-signup-container">
      <div className="login-form">

        <h3>Sign Up</h3>

        <div className="form-control">
          <div className="inputs">
            <TextField
              label="username"
              name="username"
              onChange={changeHandler}
              id="username"
              value={signupDetails.username}
            />
          </div>
          <div className="inputs">
            <TextField
              label="Email"
              name="email"
              onChange={changeHandler}
              id="email"
              value={signupDetails.email}
            />
          </div>
          <div className="inputs">
            <TextField
              label="password"
              name="password"
              onChange={changeHandler}
              id="phone"
              value={signupDetails.password}
            />
          </div>
          <div className="button">
            <button onClick={SignUpSubmitHandler}>Signup</button>
          </div>
          <div className="a-new-account">
            <div className="text-new-account">
              <p>Already have an account?</p>
            </div>
            <div className="signup-button">
              <Link to="/signin">Sign In</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

