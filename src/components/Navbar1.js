import React from "react";
import "./Navbar1.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
export default function Navbar1() {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <Link to="/" style={{ color: "white" }}>
            <h3>E-Svasthya</h3>
          </Link>
        </div>

        <ul className="nav-Links">
          <input type="checkbox" id="checkbox_toggle" />
          <label htmlFor="checkbox_toggle" className="hamburger">
            <MenuIcon />
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
