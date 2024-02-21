import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Signup from "../Components/Signin/Signup";
import Login from "../Components/Signin/Login";
function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
