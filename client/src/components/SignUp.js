import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="container">
      <form className="form">
        <label className="input-label" htmlFor="username">
          Username
        </label>
        <input
          className="form-input"
          type="text"
          id="username"
          name="username"
        />
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
          Sign Up
        </button>
      </form>
      <p className="sub-message">
        Already a member?{" "}
        <Link className="sub-message-link" to="/SignIn">
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
