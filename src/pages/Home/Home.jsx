import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "../../redux/features/productsSlice";
import Banner from "./Banner/Banner";
import Shopping from "./Shopping/Shopping";

function Home() {
  const dispatch = useDispatch();

  async function getItem() {
    try{
      const products = await fetch("https://fakestoreapi.com/products");
      const productsJson = await products.json();
      dispatch(setProducts(productsJson));
    }catch(error){
      console.log(error)
    }
  }

  useEffect(() => {
    getItem();
  }, []);

  return (
    <div>
      <Banner />
      <Shopping />
    </div>
  );
}

export default Home;
