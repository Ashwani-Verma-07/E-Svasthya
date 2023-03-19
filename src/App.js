import "./App.css";
import React from "react";
import Navbar1 from "./components/Navbar1";
import SearchBar from "./components/Searchbar";
// import SearchBar from "./components/Searchbar";
import Data from "./components/Data.json";
//import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HospitalList from "./components/HospitalList";
import About from "./components/About";
import Text from "./components/Text";
import Geolocation from "./components/Geolocation";
import Faqs from "./components/Faqs";

function App() {
  return (
    <>
      <Router>
        <div className="app">
          <Navbar1 />
          <Geolocation />
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/faqs" element={<Faqs />} />
            <Route
              path="/"
              element={
                <>
                  <Text
                    name="Welcome to"
                    content="Medical Solution World"
                    para="Our platform provides a list of nearby hospitals that have all of the necessary facilities to efficiently treat specific conditions"
                  />
                  <SearchBar placeholder={"Enter Injury"} data={Data} />
                  <HospitalList />
                </>
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
