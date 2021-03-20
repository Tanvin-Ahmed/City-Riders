import React, { useContext, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import { userContext } from "../../App";
import google from "../../img/symble/google.png";
import "./Login.css";
import {
  createUserWithEmailAndPassword,
  initializationLogInFramework,
  signInWithEmailAndPassword,
  handleSignInWithGoogle,
} from "./logInManager";

const Login = () => {
  initializationLogInFramework();
  const { loggedInUser, setLoggedInUser } = useContext(userContext);
  const [newUser, setNewUser] = useState(true);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    photo: "",
    success: false,
  });

  const [loadingSpinner, setLoadingSpinner] = useState(false);

  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  const handleFormData = (e) => {
    let isValid = true;
    if (e.target.name === "email") {
      isValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === "password") {
      isValid = e.target.value.length > 5;
    }
    if (e.target.name === "confirmPassword") {
      isValid = e.target.value.length > 5;
    }
    if (isValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user.password === user.confirmPassword) {
      if (newUser && user.name && user.email && user.password) {
        setLoadingSpinner(true);
        createUserWithEmailAndPassword(
          user.name,
          user.email,
          user.password
        ).then((res) => {
          setUser(res);
          const newUserInfo = { ...res };
          newUserInfo.displayName = user.name;
          setLoggedInUser(newUserInfo);
          history.replace(from);
          setLoadingSpinner(false);
        });
      }
    }
    if (!newUser && user.email && user.password) {
      setLoadingSpinner(true);
      signInWithEmailAndPassword(user.email, user.password).then((res) => {
        setUser(res);
        setLoggedInUser(res);
        history.replace(from);
        setLoadingSpinner(false);
      });
    }
  };

  const signInWithGoogle = () => {
    handleSignInWithGoogle().then((res) => {
      setUser(res);
      setLoggedInUser(res);
      history.replace(from);
    });
  };

  return (
    <div className="d-flex justify-content-center align-items-center flex-column mt-5">
      <div className="form-container">
        <h4 className="mb-4 text-primary">
          {newUser ? "Create an account" : "Log In"}
        </h4>
        <form onSubmit={handleSubmit}>
          {newUser && (
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="form-control my-2"
              onBlur={handleFormData}
              required
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="form-control my-2"
            onBlur={handleFormData}
            required
          />
          <input
            type="text"
            name="password"
            placeholder="Password"
            className="form-control my-2"
            onBlur={handleFormData}
            required
          />
          {newUser && (
            <input
              type="text"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="form-control my-2"
              onBlur={handleFormData}
              required
            />
          )}
          {user.confirmPassword !== "" &&
            user.password !== user.confirmPassword && (
              <small className="text-danger">Password Not Matched.</small>
            )}
          <input
            type="submit"
            onClick={handleSubmit}
            value={newUser ? "Sign In" : "Log In"}
            className="form-control btn btn-primary mt-4"
          />
        </form>
        {newUser ? (
          <small>
            Already have an account?{" "}
            <button style={{ border: "none", background: "none" }}>
              <span className="text-primary" onClick={() => setNewUser(false)}>
                Log In
              </span>
            </button>
          </small>
        ) : (
          <small>
            Don't have an account?{" "}
            <button style={{ border: "none", background: "none" }}>
              <span className="text-primary" onClick={() => setNewUser(true)}>
                Create an account
              </span>
            </button>
          </small>
        )}
        <div className="mt-5">
          {loggedInUser.success && (
            <p className="text-center text-success">
              User {newUser ? "Created" : "Logged In"} Successfully
            </p>
          )}
          {loadingSpinner && (
            <div className="text-center">
              <Spinner animation="border" variant="primary" />
            </div>
          )}
        </div>
      </div>
      <h5 className="mt-3">Or</h5>
      <div className="google">
        <button className="google-btn" onClick={signInWithGoogle}>
          <img src={google} alt="" /> Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
