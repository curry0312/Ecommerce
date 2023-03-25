import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart, cartSelector } from "../../redux/features/cartSlice";
import { formatter } from "../../util/currency";

function Item() {
  
  console.log("---------------render--------------------");
  
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const cart = useSelector(cartSelector);
  
  const IsInCart = cart.find((item) => {
    return item.id === parseFloat(id);
  });

 
  async function getTargetIdItem() {
    try{
      setLoading(true);
      console.log("-----------Loading start!--------------");
      console.log("----------Item fetching start!------------");
      const item = await fetch(`https://fakestoreapi.com/products/${id}`, {
        method: "GET",
      });
      const itemJson = await item.json();
      setItem(itemJson);
      console.log("----------Item fetching complete!------------");
      setLoading(false);
      console.log("----------Loading finish!------------");
    }catch(error){
      console.log(error)
    }
  }
  useEffect(() => {
    getTargetIdItem();
  }, [id]);
  
  useEffect(()=>{
    console.log("item:", item,'type:', typeof item);
  },[item])
  return (
    <div className="py-[100px] px-10">
      {loading === true ? (
        <div className="flex justify-center items-center">
          <div className="text-center text-[5rem] font-shan">
          Loading...
          </div>
        </div>
      ) : (
        <div className="flex gap-5">
          {/*Image*/}
          <div className="basis-1/2 flex justify-center items-center">
            <img
              src={item.image}
              alt={item.id}
              className="object-cover w-[300px]"
            />
          </div>
          {/*Info*/}
          <div className="flex flex-col gap-5 basis-1/2">
            {/*title*/}
            <div>
              <p className="text-3xl text-black font-shan font-bold">
                {item.title}
              </p>
            </div>
            {/*description*/}
            <div>
              <p className="text-xl text-black font-shan">{item.description}</p>
            </div>
            {/*category*/}
            <div>
              <p className="text-xl text-black font-shan flex gap-3">
                <span className="text-2xl font-roboto">category:</span>
                <span>{item.category}</span>
              </p>
            </div>
            {/*price*/}
            <div>
              <p className="font-shan">{formatter.format(item.price)}</p>
            </div>
            {/*add&remove button*/}
            <div className="mt-auto">
              <button
                disabled={IsInCart}
                className={
                  IsInCart
                    ? "bg-gray-300 py-2 px-4 rounded-sm"
                    : "bg-yellow-400 py-2 px-4 rounded-sm hover:bg-yellow-300"
                }
                onClick={() => dispatch(addToCart(item))}
              >
                {IsInCart ? "Already in cart" : "Add to cart"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Item;
