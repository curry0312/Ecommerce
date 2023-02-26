import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { cartSelector } from "../../../features/cartSlice";
import ShoppingCategoriesSelectors from "./ShoppingCategoriesSelectors";
import ShoppingList from "./ShoppingList";

function Shopping() {
  const [currentCategory, setCurrentCategory] = useState("all");
  const cart = useSelector(cartSelector)
  useEffect(()=>{
    console.log('cart:',cart)
  },[cart])
  return (
    <div id="shopping" className="pt-[75px]">
      <ShoppingCategoriesSelectors
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      />
      <ShoppingList currentCategory={currentCategory} />
    </div>
  );
}

export default Shopping;
