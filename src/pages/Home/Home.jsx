import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "../../features/productsSlice";
import Banner from "./Banner/Banner";
import Shopping from "./Shopping/Shopping";

function Home() {
  const dispatch = useDispatch();

  async function getItem() {
    const products = await fetch("https://fakestoreapi.com/products");
    const productsJson = await products.json();
    dispatch(setProducts(productsJson));
  }

  useEffect(() => {
    getItem();
  }, []);

  return (
    <div className="">
      <Banner />
      <Shopping />
    </div>
  );
}

export default Home;
