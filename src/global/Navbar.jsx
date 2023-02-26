import React from "react";
import Links from "../components/Navbar/Links";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuIcon from "@mui/icons-material/Menu";
import { useSelector } from "react-redux";
import { cartSelector } from "../features/cartSlice";

function Navbar() {
  const navigate = useNavigate();
  const cart = useSelector(cartSelector);
  return (
    <nav className="h-[75px] flex items-center p-4 fixed left-0 right-0 bg-darkblue z-40">
      <div className="flex flex-grow justify-between items-center space-x-5">
        {/*Logo*/}
        <div
          onClick={() => navigate("/")}
          className="text-white font-roboto font-bold cursor-pointer text-xl md:text-2xl"
        >
          Wang Ecommerce
        </div>
        {/*Hamburger menu*/}
        <div className="block md:hidden">
          <MenuIcon sx={{ color: "white", fontSize: "30px" }}/>
        </div>
        {/*Search input*/}
        <div className="hidden rounded-md md:flex md:flex-grow">
          <input
            type="text"
            className="w-full rounded-l-md p-2 outline-none"
            placeholder="Search"
          />
          <button className="flex justify-center items-center p-2 bg-yellow-400 rounded-r-md hover:bg-yellow-500">
            <SearchIcon sx={{ color: "black" }} />
          </button>
        </div>
        {/*Links*/}
        <div className="hidden md:flex space-x-3">
          <Links to={"user"} icon={<PersonIcon sx={{ color: "white" }} />} />
          <Links
            to={"notification"}
            icon={<NotificationsIcon sx={{ color: "white" }} />}
          />
          <Links
            to={"shoppingcart"}
            icon={<ShoppingCartIcon sx={{ color: "white" }} />}
            badgeContent={cart.length}
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
