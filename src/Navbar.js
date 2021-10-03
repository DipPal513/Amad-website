import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./images/logo.png";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState();
  function handleClick() {
    setClick(!click);
  }
  function navClose() {
    setClick(false);
  }

  // const navLinks = document.querySelectorAll('.nav_link');
  // navLinks.forEach((link)=>{
  //   // const[isActive,setActive] =useState('')
  //   link.classList.remove('nav_link')
  // })

  return (
    <>
      <div className="mobile_nav">
        <img src={Logo} alt="" />
        <i className="fNavLinkfa-bars" onClick={handleClick}></i>
      </div>
      <div className={click ? "sideNav active" : "sideNav"}>
        <div className="nav_close">
          <i className="fNavLinkfa-close" onClick={navClose}></i>
        </div>
        <NavLink to="/">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
        </NavLink>

        <nav>
          <ul>
            <li>
              <NavLink
                className="nav_link"
                activeClassName="activeNav"
                to="/home"
                onClick={navClose}
              >
                home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav_link"
                activeClassName="activeNav"
                to="/shop"
                onClick={navClose}
              >
                shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/preview"
                activeClassName="activeNav"
                className="nav_link"
                onClick={navClose}
              >
                preview
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cart"
                activeClassName="activeNav"
                className="nav_link"
                onClick={navClose}
              >
                cart
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav_link"
                activeClassName="activeNav"
                to="/checkout"
                onClick={navClose}
              >
                checkout
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="nav_btn">
          <NavLink to="#discount" className="discount">
            %discount%
          </NavLink>
          <NavLink to="/week" className="newWeek">
            new this week
          </NavLink>
        </div>
        <div className="nav_fav">
          <NavLink to="/cart">
            <i className="fNavLinkfa-shopping-cart" aria-hidden="true"></i>
            cart(0)
          </NavLink>
          <NavLink to="/fav">
            <i className="fNavLinkfa-star" aria-hidden="true"></i>favourite
          </NavLink>
          <NavLink to="/search">
            <i className="fNavLinkfa-search" aria-hidden="true"></i>search
          </NavLink>
        </div>
        <div className="nav_social">
          <NavLink to="/github">
            <i className="fas fa-github"></i>
          </NavLink>
          <NavLink to="#instagram">
            <i className="fas fa-instagram"></i>
          </NavLink>
          <NavLink to="/facebok">
            <i className="fas f-facebook-f"></i>
          </NavLink>
          <NavLink to="/twitter">
            <i className="fas fa-twitter"></i>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Navbar;
