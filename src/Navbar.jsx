import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/*Desktop */}
      <div className="container mx-auto w-4/5 h-12 bg-[#1B1B1B]  items-center justify-around gap-12 text-[#dddcdc] hidden sm:flex text-lg font-sans-serif border rounded-full relative top-1 cursor-pointer">
        <ul>
          <NavLink to="/" className={(e) => (e.isActive ? "text-red-500" : "")}>
            <li>Home</li>
          </NavLink>
        </ul>

        <ul>
          <NavLink to="/Shopify" className={(e) => (e.isActive ? "text-red-500" : "")}>
            <li>Shopify</li>
          </NavLink>
        </ul>
        <ul>
          <NavLink to="/About" className={(e) => (e.isActive ? "text-red-500" : "")}>
            <li>About</li>
          </NavLink>
        </ul>
        <ul>
          <NavLink to="/Contact" className={(e) => (e.isActive ? "text-red-500" : "")}>
            <li>Contact</li>
          </NavLink>
        </ul>
        {/* <ul>
          <NavLink to="/Projects" className={(e) => (e.isActive ? "text-red-500" : "")}>
            <li>Projects</li>
          </NavLink>
        </ul> */}
      </div>
{/*for mobile */}
      <p onClick={toggleMenu}>
        <FontAwesomeIcon
          icon={faBars}
        
          className="text-[#dddcdc] float-end m-4 hover:text-red-500 text-lg flex sm:hidden cursor-pointer"
        />
      </p>

      {isOpen && (
        <div className="w-[70vw] h-[100vh] bg-[#3b3838] float-end absolute top-2 right-1 rounded-lg shadow-lg p-6 flex flex-col gap-10 text-white text-lg z-50 ">
          
            <p onClick={toggleMenu}>
        <FontAwesomeIcon
          icon={faXmark}
        
          className="text-[#dddcdc] absolute float-end m-4 right-1 top-1 hover:text-red-500 text-lg flex sm:hidden cursor-pointer"
        />
      </p>
          <NavLink
            to="/"
            onClick={toggleMenu}
            className={(e) => (e.isActive ? "text-red-500" : "hover:text-red-500")}
          >
            Home
          </NavLink>
          <NavLink
            to="/Shopify"
            onClick={toggleMenu}
            className={(e) => (e.isActive ? "text-red-500" : "hover:text-red-500")}
          >
            Shopify
          </NavLink>
          <NavLink
            to="/About"
            onClick={toggleMenu}
            className={(e) => (e.isActive ? "text-red-500" : "hover:text-red-500")}
          >
            About
          </NavLink>
          <NavLink
            to="/Contact"
            onClick={toggleMenu}
            className={(e) => (e.isActive ? "text-red-500" : "hover:text-red-500")}
          >
            Contact
          </NavLink>
          {/* <NavLink
            to="/Projects"
            onClick={toggleMenu}
            className={(e) => (e.isActive ? "text-red-500" : "hover:text-red-500")}
          >
            Projects
          </NavLink> */}
        </div>
      )} 
    </div>
  );
};

export default Navbar;
