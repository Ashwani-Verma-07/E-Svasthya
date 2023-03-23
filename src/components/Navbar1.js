import React, { useState } from "react";
import "./Navbar1.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { Icon } from "@iconify/react";
import logo1 from "../assests/logo.png";
export default function Navbar1() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <Link to="/" style={{ color: "white" }}>
            <img src={logo1} alt="My logo" />
          </Link>
        </div>

        <ul className="nav-Links">
          <input type="checkbox" id="checkbox_toggle" />
          <label htmlFor="checkbox_toggle">
            <span onClick={() => setShow(!show)} className="hamburger">
              {show ? (
                <Icon
                  icon="material-symbols:close"
                  color="white"
                  width="30"
                  height="30"
                />
              ) : (
                <Icon
                  icon="cil:hamburger-menu"
                  color="white"
                  width="30"
                  height="30"
                />
              )}
            </span>
          </label>

          <div className="menu">
            <li>
              <Link to="/about" className="remove_decoration">
                ABOUT
              </Link>
            </li>
            <li>
              <Link to="/services" className="remove_decoration">
                SERVICES
              </Link>
            </li>
            <li className="services">
              DASHBOARD
              <ul className="dropdown">
                <li>
                  <Link to="/" className="remove_decoration">
                    Dropdown 1
                  </Link>
                </li>
                <li>
                  <Link to="/" className="remove_decoration">
                    Dropdown2
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/faqs" className="remove_decoration">
                FAQS
              </Link>
            </li>
            <li>
              <Button
                variant="outlined"
                className="button__new"
                style={{
                  color: "#fff",
                  border: "2.5px solid #fff",
                  fontWeight: "800",
                  borderRadius: "20px",
                }}
              >
                Register/Sign-in
              </Button>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}
