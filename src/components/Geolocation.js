import axios from "axios";
import React, { useEffect, useState } from "react";
function Geolocation() {
  const [currentLocation, setCurrLocation] = useState({});
  const [currentLocationJS, setcurrentLocationJS] = useState({});
  useEffect(() => {
    getLocation();
    getLocationJS();
  }, []);

  const getLocation = async () => {
    const location = await axios.get("https://ipapi.co/json");
    setCurrLocation(location.data);
  };
  const getLocationJS = async () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setcurrentLocationJS({ latitude, longitude });
    });
  };
  return (
    <div>
      {/* <div className="geolocation">
        <p>Longitude{currentLocation.longitude}</p>
        <p>latitude {currentLocation.latitude}</p>
        <p>City{currentLocation.city}</p>
        <p>LongitudeJS {currentLocationJS.longitude}</p>
        <p>LatitudeJS {currentLocationJS.latitude}</p>
      </div> */}
    </div>
  );
}

export default Geolocation;
