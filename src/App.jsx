import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import HomePage from "./components/pages/HomePage";
import ShopPage from "./components/pages/Shop";

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/plant-care" element={<div>Plant care</div>} />
          <Route path="/blogs" element={<div>Blogs</div>} />
        </Route>
      </Routes>
    </>
  );
}
