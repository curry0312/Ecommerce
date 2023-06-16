import Links from "../../components/Navbar/Links";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import { useSelector } from "react-redux";
import { cartSelector } from "../../redux/features/cartSlice";

const Navbar_Links = () => {
  const cart = useSelector(cartSelector);
  return (
    <div className="hidden md:flex space-x-3">
      {/* <Links to={"user/login"} icon={<PersonIcon sx={{ color: "white" }} />} /> */}
      <Links
        to={"shoppingcart"}
        icon={<ShoppingCartIcon sx={{ color: "white" }} />}
        badgeContent={cart.length}
      />
    </div>
  );
};

export default Navbar_Links;
