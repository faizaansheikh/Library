import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt1, HiOutlineX } from "react-icons/hi";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./NavMobile.css";
import { Badge } from '@mui/material';

const NavMobile = () => {
  const [sideBar, setSideBar] = useState(false);

  const showSideBar = () => {
    setSideBar(!sideBar);
  };
  
  return (
    <div className="navmobile">
      <div className="menu_bar" onClick={showSideBar}>
        <HiMenuAlt1 size={35} />
      </div>
      <div className={sideBar ? "nav_menu active" : "nav_menu"}>
        <ul className="nav_menu_items">
          <li className="navbar_toggle">
            <HiOutlineX size={35} onClick={showSideBar} />
          </li>
          <Link>Home</Link>
          <Link>Books</Link>
          <Link>History</Link>
         
           
           <div className="set_btn_log"><button className="left_btn_nav">Log out</button></div>
        </ul>
      </div>
    </div>
  );
};
export default NavMobile;