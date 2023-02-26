import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { formatter } from "../../util/currency";
import { addToCart, cartSelector } from "../../features/cartSlice";
import { useNavigate } from "react-router-dom";

function ShoppingItem({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector(cartSelector);
  const IsInCart = cart.find((item) => {
    return item.id === product.id;
  });
  return (
    <div className="flex flex-col space-y-3 font-roboto cursor-pointer">
      <div className="flex justify-center items-center h-[500px]">
        <img src={product.image} alt={product.id} className="w-[250px]" />
      </div>
      <div
        className="line-clamp-1 text-2xl hover:text-gray-400"
        onClick={() => navigate(`/${product.id}`)}
      >
        {product.title}
      </div>
      <div className="line-clamp-2">{product.description}</div>
      <div>{formatter.format(product.price)}</div>
      <div className="mt-auto">
        <button
          disabled={IsInCart}
          className={
            IsInCart
              ? "bg-gray-300 py-2 px-4 rounded-sm"
              : "bg-yellow-400 py-2 px-4 rounded-sm hover:bg-yellow-300"
          }
          onClick={() => dispatch(addToCart(product))}
        >
          {IsInCart ? "Already in cart" : "Add to cart"}
        </button>
      </div>
    </div>
  );
}

export default ShoppingItem;
