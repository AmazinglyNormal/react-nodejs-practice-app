import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="form-container">
      <form className="form">
        <label className="input-label" htmlFor="email">
          Email
        </label>
        <input className="form-input" type="email" id="email" name="email" />
        <label className="input-label" htmlFor="password">
          Password
        </label>
        <input
          className="form-input"
          type="password"
          id="password"
          name="password"
        />
        <button className="btn btn-primary" type="submit">
          Sign In
        </button>
      </form>
      <p className="sub-message">
        Not a member?{" "}
        <Link className="sub-message-link" to="/SignUp">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
