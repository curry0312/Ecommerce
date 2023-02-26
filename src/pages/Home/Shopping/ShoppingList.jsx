import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { productsSelector } from "../../../features/productsSlice";
import ShoppingItem from "../../../components/Home/ShoppingItem";

function ShoppingList({ currentCategory }) {
  const products = useSelector(productsSelector);

  useEffect(() => {
    console.log('products:',products);
  }, [products]);

  return (
    <div className="pt-5">
      <div className="flex flex-col w-4/5 mx-auto md:grid md:grid-cols-3 md:gap-5">
        {products.map((product, index) => {
          if (currentCategory === "all")
            return <ShoppingItem key={index} product={product} />;
          if (product.category === currentCategory)
            return <ShoppingItem key={index} product={product} />;
          return null;
        })}
      </div>
    </div>
  );
}

export default ShoppingList;
