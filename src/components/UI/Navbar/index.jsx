import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.scss";
import Modal from "../Modal";

export default function Navbar() {
  const [activePage, setActivePage] = useState(null);

  const handleClick = (page) => {
    setActivePage(page);
  };

  return (
    <div className="nav__container">
      <div className="nav__logo">
        <img src="/src/assets/icons/Logo.svg" alt="" />
      </div>
      <div className="pages">
        <Link
          className={`${activePage === "home" ? "active" : ""} nav__links`}
          onClick={() => handleClick("home")}
          to="/"
        >
          Home
        </Link>
        <Link
          className={`${activePage === "shop" ? "active" : ""} nav__links`}
          onClick={() => handleClick("shop")}
          to="/shop"
        >
          Shop
        </Link>
        <Link
          className={`${
            activePage === "plant-care" ? "active" : ""
          } nav__links`}
          onClick={() => handleClick("plant-care")}
          to="/plant-care"
        >
          Plant care
        </Link>
        <Link
          className={`${activePage === "blogs" ? "active" : ""} nav__links`}
          onClick={() => handleClick("blogs")}
          to="/blogs"
        >
          Blogs
        </Link>
      </div>
      <div className="nav__icons">
        <p><i className="fa-solid fa-magnifying-glass"></i></p>
        <p><i className="fa-solid fa-cart-shopping"></i></p>
        <Modal />
      </div>
    </div>
  );
}

