import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../App";
import logo from "../../img/bg/bg.png";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const { loggedInUser, setLoggedInUser } = useContext(userContext);

  return (
    <nav>
      <input type="checkbox" id="check" />
      <label for="check" className="checkbtn">
        <FontAwesomeIcon icon={faBars} />
      </label>
      <Link to="/">
        {" "}
        <label className="logo">City Riders</label>
      </Link>
      <ul>
        <li>
          <Link className="active" aria-current="page" to="/home">
            Home
          </Link>
        </li>
        <li>
          {loggedInUser.email ? (
            <Link className="active" aria-current="page" to="/">
              Destination
            </Link>
          ) : (
            <Link className="active" aria-current="page" to="/login">
              Destination
            </Link>
          )}
        </li>
        <li>
          {loggedInUser.email ? (
            <Link
              className="btn btn-light text-dark"
              to="/"
              onClick={() => setLoggedInUser({})}
            >
              Log Out
            </Link>
          ) : (
            <Link className="btn btn-light text-dark" to="/login">
              Log In
            </Link>
          )}
        </li>
        <li>
          {<h5 className="text-light ml-4">{loggedInUser.displayName}</h5>}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
