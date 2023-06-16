import React from "react";
import { Outlet } from "react-router-dom";
import Navbar_Logo from "./Navbar_Logo";
import Navbar_search from "./Navbar_search";
import Navbar_menu from "./Navbar_menu";
import Navbar_Links from "./Navbar_Links";
import MobileMenu from "../MobileMenu/MobileMenu";

function Navbar() {
  return (
    <>
      <nav className="h-[75px] flex items-center p-4 fixed left-0 right-0 bg-darkblue z-40">
        <div className="flex flex-grow justify-between items-center space-x-5">
          <Navbar_Logo />
          <Navbar_search />
          {/* <Navbar_Links /> */}
          <Navbar_menu />
        </div>
      </nav>
      <MobileMenu />
      <Outlet />
    </>
  );
}

export default Navbar;
