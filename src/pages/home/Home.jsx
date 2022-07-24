import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../components/navbar/NavBar";
import "./home.css";

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};

export default Home;
