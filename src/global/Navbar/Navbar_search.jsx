import SearchIcon from "@mui/icons-material/Search";

const Navbar_search = () => {
  return (
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
  );
};

export default Navbar_search;
