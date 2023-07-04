import React, { useContext, useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/UseContext";

const Login = () => {
  const { signInUser } = useContext(AuthContext);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    const from = event.target;
    const email = from.email.value;
    const password = from.password.value;
    console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        setSuccess(true);
        from.reset();
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
        setSuccess(false);
      });
  };
  return (
    <div className="signUp-parent-div ">
      <div className="p-10">
        <div className=" mx-auto signup-div p-5">
          <h1 className="sign-head">Login</h1>
          <h4 className="start-text">Get started with us today!</h4>
          <form onSubmit={handleLogin} className="card-body  mx-auto">
            <div className="form-control mx-auto">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <label className="input-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  className=" input-field"
                  required
                />
              </label>
            </div>
            <div className="form-control mx-auto">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <label className="input-group">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className=" input-field"
                  required
                />
              </label>
            </div>

            <h1 style={{ color: "white" }} className="m-5">
              You new to this site?{" "}
              <Link style={{ color: "blue" }} to="/signUp">
                Please SignUp
              </Link>
            </h1>

            <p style={{ color: "red" }}>{error}</p>
            {success && (
              <p style={{ color: "greenyellow" }}>User Login Successfully</p>
            )}
            <div className="  sign-up-btn ">
              <button className="">Login</button>
            </div>
          </form>
          <button className="  sign-up-btn ">SignIn With Google</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
