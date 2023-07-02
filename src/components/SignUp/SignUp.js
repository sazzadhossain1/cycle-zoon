import React from "react";
import "./SignUp.css";

const SignUp = () => {
  const handleSignUpSigning = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    console.log(name, email, password, confirmPassword);
  };
  return (
    <div className="signUp-parent-div ">
      <div className="p-10">
        <div className=" mx-auto signup-div p-5">
          <h1 className="sign-head">SignUp</h1>
          <h4 className="start-text">Get started with us today!</h4>
          <form onSubmit={handleSignUpSigning} className="card-body  mx-auto">
            <div className="form-control mx-auto">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className=" input-field"
                  required
                />
              </label>
            </div>
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
            <div className="form-control mx-auto">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <label className="input-group">
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className=" input-field"
                  required
                />
              </label>
            </div>

            <h1 style={{ color: "white" }} className="m-5">
              Already have an account?{" "}
            </h1>

            <div className="  sign-up-btn ">
              <button className="">SignUp</button>
            </div>
          </form>
          <button className="  sign-up-btn ">SignIn With Google</button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
