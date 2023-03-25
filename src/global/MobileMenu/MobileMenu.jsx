import React from "react";
import { useSelector } from "react-redux";
import { isMenuOpenSelector } from "../../redux/features/isMenuOpenSlice";
import MobileMenuLink from "./MobileMenuLink";

const MobileMenu = () => {
  const isMenuOpen = useSelector(isMenuOpenSelector);
  return (
    <div className={isMenuOpen ? `menu menu-open menu-transition` : `menu menu-close menu-transition`}>
      <div className="flex flex-col space-y-5 mt-24">
        <MobileMenuLink to="/user/login" text="User" />
        <MobileMenuLink to="/shoppingcart" text="ShoppingCart" />
      </div>
    </div>
  );
};

export default MobileMenu;
