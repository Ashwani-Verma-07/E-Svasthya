import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Geolocation.css";
function Geolocation() {
  const [currentLocation, setCurrLocation] = useState({});
  const [currentLocationJS, setcurrentLocationJS] = useState(false);
  useEffect(() => {
    getLocation();
    getLocationJS();
  }, []);

  const getLocation = async () => {
    const location = await axios.get("https://ipapi.co/json");
    setCurrLocation(location.data);
  };
  const getLocationJS = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setcurrentLocationJS({ latitude, longitude });
      });
    } else {
      document.getElementsByClassName("geolocation").innerHTML =
        "Geolocation is not supported";
    }
  };
  return (
    <div>
      <div className="geolocation">
        {/* <p>Longitude{currentLocationJS.longitude}</p>
        <p>latitude {currentLocationJS.latitude}</p>
        */}
        <p>Longitude : {currentLocation.longitude}</p>
        <p>Latitude : {currentLocation.latitude}</p>
        <p>City : {currentLocation.city}</p>
      </div>
    </div>
  );
}

export default Geolocation;
