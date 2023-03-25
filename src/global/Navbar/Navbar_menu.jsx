import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { setIsMenuOpen } from "../../redux/features/isMenuOpenSlice";

const Navbar_menu = () => {
  const dispatch = useDispatch();
  return (
    <div className="block cursor-pointer md:hidden">
      <IconButton onClick={() => dispatch(setIsMenuOpen())}>
        <MenuIcon sx={{ color: "white", fontSize: "30px" }} />
      </IconButton>
    </div>
  );
};

export default Navbar_menu;
