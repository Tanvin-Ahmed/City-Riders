import React from "react";
import "./Home.css";
import bike from "../../img/rides-types/bike.png";
import car from "../../img/rides-types/car.png";
import bus from "../../img/rides-types/bus.png";
import train from "../../img/rides-types/train.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="pt-5 container-fluid d-flex justify-content-around flex-wrap">
        <Link to="/ride/Bike">
          <div className="rides">
            <img src={bike} alt="" />
            <h3>Bike Ride</h3>
          </div>
        </Link>
        <Link to="/ride/Car">
          <div className="rides">
            <img src={car} alt="" />
            <h3>Car Ride</h3>
          </div>
        </Link>
        <Link to="/ride/Bus">
          <div className="rides">
            <img src={bus} alt="" />
            <h3>Bus Ride</h3>
          </div>
        </Link>
        <Link to="/ride/Train">
          <div className="rides">
            <img src={train} alt="" />
            <h3>Train Ride</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
