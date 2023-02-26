import { IconButton } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { bannerData } from "../../../data/bannerData";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import SouthIcon from "@mui/icons-material/South";
import { motion } from "framer-motion";
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const width = parseFloat(bannerData.length);
  useEffect(() => {
    ref.current.style.transform = `translateX(-${
      (currentIndex / width) * 100
    }%)`;
  }, [currentIndex]);
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigateNext();
    }, 4000);
    return () => clearTimeout(timeout);
  }, [currentIndex]);
  function navigatePrev() {
    setCurrentIndex((current) => {
      if (current === 0) return 2;
      return current - 1;
    });
  }
  function navigateNext() {
    setCurrentIndex((current) => {
      if (current === 2) return 0;
      return current + 1;
    });
  }
  return (
    <div className="overflow-hidden relative pt-[72px] h-screen">
      {/*Banner*/}
      <div
        aria-label="banner-container"
        ref={ref}
        className={`w-[300%] h-full flex transition duration-700 ease-in-out`}
      >
        {bannerData.map((data) => {
          return (
            <div key={data.id} className="w-screen h-full">
              <img
                src={data.image}
                alt={`${data.id}`}
                className="block w-full h-full object-cover"
              />
            </div>
          );
        })}
      </div>
      {/*Header*/}
      <div className="absolute bottom-10 left-5 text-white font-shan text-3xl sm:text-[3rem] md:text-[4rem] xl:text-[5rem]">
        Welcome to my store
      </div>
      {/*Anchor link to shoppinglist*/}
      <AnchorLink href="#shopping" className="flex justify-center items-center rounded-md bg-red-700 w-[80px] h-[80px] p-2 absolute right-5 bottom-5 cursor-pointer hover:scale-105">
        <motion.div
          initial={{ y: "-10px" }}
          animate={{ y: "10px" }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <SouthIcon sx={{ color: "white" }} />
        </motion.div>
      </AnchorLink>
      {/*Navigate button*/}
      <IconButton
        sx={{ position: "absolute", top: "50%", left: "0", color: "white" }}
        onClick={() => navigatePrev()}
      >
        <NavigateBeforeIcon />
      </IconButton>
      <IconButton
        sx={{ position: "absolute", top: "50%", right: "0", color: "white" }}
        onClick={() => navigateNext()}
      >
        <NavigateNextIcon />
      </IconButton>
    </div>
  );
}

export default Banner;
