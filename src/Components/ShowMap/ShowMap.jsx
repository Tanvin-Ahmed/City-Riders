import React from "react";
import GoogleMap from "react-google-maps/lib/components/GoogleMap";
import withGoogleMap from "react-google-maps/lib/withGoogleMap";
import withScriptjs from "react-google-maps/lib/withScriptjs";

const Map = () => {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 23.810331, lng: 90.412521 }}
    />
  );
};

const WrappedMap = withScriptjs(withGoogleMap(Map));

const ShowMap = () => {
  return <div style={{width: "100%", height: "77vh"}}>
    <WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDMEKBSqa58-53BRSLSH3JBcolP7xnuHF8`} 
    loadingElement = {<div style={{height:"100%"}} />}
    containerElement = {<div style={{height:"100%"}} />}
    mapElement = {<div style={{height:"100%"}} />}
    />

  </div>;
};

export default ShowMap;
