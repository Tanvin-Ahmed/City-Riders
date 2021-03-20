import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import FakeData from "../FakeData/FakeData.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import "./RideOption.css";

const RideOption = () => {
    const { vehicle } = useParams();
    const [transports, setTransports] = useState([]);
    useEffect(() => {
      setTransports(FakeData);
    }, []);
  
    const transportType = transports.filter(
      (transport) => transport.vehicle === vehicle
    );
    return (
        <>
            {
                transportType.map(transport => <div className="w-100 option rounded d-flex justify-content-around align-items-center my-3">
                    <img src={transport.img} alt=""/>
                    <p>{transport.vehicle}</p>
                    <p><FontAwesomeIcon icon={faUserFriends} /> {transport.capacity}</p>
                    <h5>{transport.cost}$</h5>
                </div>)
            }
        </>
    );
};

export default RideOption;