import React from "react";
import backgroundImage from "../assets/img/background.png";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header
      className="relative h-screen w-full bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-30 z-10"></div>

      {/* Navbar */}
      <div className="relative z-20 pt-6 px-4">
        {" "}
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
