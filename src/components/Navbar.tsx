import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.modules.css";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useState } from "react";
import HomeIcon from "../assets/home.png";
import LoginIcon from "../assets/login.png";
import RegisterIcon from "../assets/register.png";

const Navbar = () => {
  const [value, setValue] = useState("Home");
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="btn-container">
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              navigate(newValue);
            }}
          >
            <BottomNavigationAction
              label="Home"
              value={"/"}
              icon={<img src={HomeIcon} alt="Home" width={24} height={24} />}
            />
            <BottomNavigationAction
              label="Log in"
              value={"/login"}
              icon={<img src={LoginIcon} alt="Login" width={24} height={24} />}
            />
            <BottomNavigationAction
              label="Register"
              value={"/register"}
              icon={
                <img src={RegisterIcon} alt="Register" width={24} height={24} />
              }
            />
          </BottomNavigation>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
