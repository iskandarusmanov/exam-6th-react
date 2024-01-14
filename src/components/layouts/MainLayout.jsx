import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../UI/Navbar";
import './MainLayout.scss'

export default function MainLayout() {
  return (
    <div className="main__container">
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}