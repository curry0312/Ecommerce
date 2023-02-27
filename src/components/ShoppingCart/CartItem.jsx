import { formatter } from "../../util/currency";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { decreaseQunatity, increaseQunatity, removeFromCart } from "../../features/cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();
  return (
    <div className="p-4">
      <div className="flex font-roboto">
        {/*Image*/}
        <div className="basis-1/3 flex justify-center items-center min-w-[300px] min-h-[200px]">
          <img src={item.image} alt={item.title} className="h-[70%] object-cover" />
        </div>
        {/*Info*/}
        <div className="basis-2/3 flex flex-col">
          <div>
            <h2>{item.title}</h2>
          </div>
          <div>
            <p>{formatter.format(item.price)}</p>
          </div>
          <div className="mt-auto flex">
            {/*Add&decrease button*/}
            <div className="flex items-center space-x-2">
              <button className="w-10 h-10 text-white rounded-md bg-blue-400 text-xl" onClick={()=>dispatch(decreaseQunatity(item))}>-</button>
              <span>{item.quantity}</span>
              <button className="w-10 h-10 text-white rounded-md bg-blue-400 text-xl" onClick={()=>dispatch(increaseQunatity(item))}>+</button>
            </div>
            {/*Delete button*/}
            <button
              onClick={() => dispatch(removeFromCart(item))}
              className="bg-red-700 hover:bg-red-500 text-white py-2 px-4 rounded-md ml-auto"
            >
              delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
