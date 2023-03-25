import React from "react";
import { Link } from "react-router-dom";

const Navbar_Logo = () => {
  return (
    <Link
      to="/"
      className="text-white font-roboto font-bold cursor-pointer text-xl md:text-2xl"
    >
      Wang Ecommerce
    </Link>
  );
};

export default Navbar_Logo;
