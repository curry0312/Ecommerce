import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ShoppingItem from "../../components/Home/ShoppingItem";
import CartItem from "../../components/ShoppingCart/CartItem";
import { cartSelector } from "../../features/cartSlice";
import { productsSelector, setProducts } from "../../features/productsSlice";
import { formatter } from "../../util/currency";

function ShoppingCart() {
  const cart = useSelector(cartSelector);
  const products = useSelector(productsSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const subtotal = parseFloat(
    cart.reduce((total, item) => {
      return (total = total + item.price);
    }, 0)
  );
  async function getItem() {
    const products = await fetch("https://fakestoreapi.com/products");
    const productsJson = await products.json();
    dispatch(setProducts(productsJson));
  }
  useEffect(() => {
    getItem();
  }, []);

  return (
    <div className="relative py-[85px] flex bg-gray-200 px-5">
      {/*cartItem info*/}
      <div className="basis-2/3 bg-white flex flex-col space-y-3 self-start min-h-[200px] p-4">
        <span className="text-3xl font-shan">Shopping cart:</span>
        {cart.length === 0 ? (
          <div className="p-5">
            <p className="text-black font-shan text-xl">Cart is empty!!</p>
            <button
              className="bg-yellow-300 px-4 py-2 rounded-md font-roboto text-white mt-5"
              onClick={() => navigate("/")}
            >
              Go to shopping
            </button>
          </div>
        ) : (
          cart.map((item, index) => {
            return <CartItem key={index} item={item} />;
          })
        )}
      </div>

      {/*cartInfo*/}
      <div className="px-5 basis-1/3 rounded-lg font-shan flex flex-col space-y-3">
        {/*Subtotal*/}
        <div className="bg-white p-5">
          <p>
            Subtotal({cart.length}):{formatter.format(subtotal)}
          </p>
          <div>
            <button className="bg-yellow-400 py-2 px-4 rounded-md hover:bg-yellow-500">
              Proceed to checkout
            </button>
          </div>
        </div>
        {/*Other goods(show the product which doesn't in cart)*/}
        <div className="bg-white p-5">
          <div className="font-shan text-2xl">
            <h2>Other products you may be interested in:</h2>
          </div>
          <div>
            {products.map((product) => {
              return <ShoppingItem key={product.id} product={product} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
