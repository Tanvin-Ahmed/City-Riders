import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../App";

const Navbar = () => {
  const { loggedInUser, setLoggedInUser } = useContext(userContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          City Riders
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="/navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="m-auto"></div>
          <div className="navbar-nav">
            <Link className="nav-link active" aria-current="page" to="/home">
              Home
            </Link>
            {
             loggedInUser.email ? <Link className="nav-link btn btn-light text-dark" to="/" onClick={() => setLoggedInUser({})}>
                Log Out
              </Link> :
             <Link className="nav-link btn btn-light text-dark" to="/login">
                Log In
              </Link>
            }
            {
              <h5 className="nav-link text-light ml-4">{loggedInUser.displayName}</h5>
            }
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
