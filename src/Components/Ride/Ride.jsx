import React, { useState } from "react";
import RideOption from "../RideOption/RideOption";
import arrow from "../../img/symble/pngegg.png";
import "./Ride.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import ShowMap from "../ShowMap/ShowMap";

const Ride = () => {
  const [search, setSearch] = useState(false);
  const [place, setPlace] = useState({
    from: "",
    to: "",
    date: "",
    time: ""
  });
  const formData = (e) => {
    const info = { ...place };
    info[e.target.name] = e.target.value;
    setPlace(info);
  };
  const submit = (e) => {
    e.preventDefault();
    if (place.from && place.to) {
      setSearch(true);
    }
  };



   const getDateTime = () => {
    const d = new Date();
    const day = d.getDate();
    const month = d.getMonth() + 1;
    const year = d.getFullYear();
    const date = day + "/" + month + "/" + year;
    const t = d.toLocaleTimeString();

    const info = { ...place };
    info.date = date;
    info.time = t;
    setPlace(info);
  }

  return (
    <div className="row container-fluid mt-5">
      <div className="col-lg-3 col-sm-12">
        <div className="part bg-primary p-3 text-light rounded">
          {!search ? (
            <form onSubmit={submit}>
              <div className="my-2">
                <label>Pick From</label>
                <input
                  onBlur={formData}
                  name="from"
                  type="text"
                  className="form-control"
                  required
                />
              </div>
              <div className="my-2">
                <label>Pick To</label>
                <input
                  onBlur={formData}
                  name="to"
                  type="text"
                  className="form-control"
                  required
                />
              </div>
              <input
                onClick={submit, getDateTime}
                type="submit"
                value="Search"
                className="form-control btn btn-warning my-2"
              />
            </form>
          ) : (
            <>
              <div className="bg-primary rounded text-light result">
                <button onClick={() => setSearch(false)} className="btn btn-light mb-3">
                  <FontAwesomeIcon icon={faArrowCircleLeft} />
                </button>
                <h5>From: {place.from}</h5>
                <img src={arrow} alt="" />
                <h5>To: {place.to}</h5>
                <div className="d-flex justify-content-around align-items-center flex-wrap border p-2">
                  <h6>Time: {place.time}</h6>
                  <h6>Date: {place.date}</h6>
                </div>
              </div>
              <RideOption></RideOption>
            </>
          )}
        </div>
      </div>
      <div className="col-lg-9 col-sm-12">
        <div className="part my-5">
          <ShowMap></ShowMap>
        </div>
      </div>
    </div>
  );
};

export default Ride;
