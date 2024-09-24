import React from "react";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";

import Button from "../Button";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <nav className="bg-white">
      <div className="flex items-center font-medium justify-around">
        <div>
          <img src={Logo} alt="logo" className="md:cursor-pointer h-9" />
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
        </ul>
        <div className="md:block hidden">
          <Button />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
