import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setIsMenuOpen } from "../../redux/features/isMenuOpenSlice";

const MobileMenuLink = ({ to, text }) => {
  const dispatch = useDispatch()
  return (
    <Link
      className="w-full p-2 font-shan rounded-lg text-white text-3xl text-center hover:bg-slate-600"
      to={to}
      onClick={()=>dispatch(setIsMenuOpen())}//When clicking the link, the mobile menu should be close
    >
      {text}
    </Link>
  );
};

export default MobileMenuLink;
