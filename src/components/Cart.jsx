import React, { useEffect, useState } from "react";
import CartCard from "./CartCard";
import { useSelector, useDispatch } from "react-redux";
import { add, empty } from "../redux/features/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const cartData = useSelector((state) => state.cart);

  const cartTotal = cartData.reduce((acc, cur) => acc + cur.price, 0);
  return (
    <>
      <div className=" flex flex-row flex-wrap gap-3 justify-center mt-40 sm:mt-24">
        {cartData.map((items) => (
          <CartCard
            id={items.id}
            key={items.id}
            title={items.title}
            price={items.price}
            image={items.image}
          />
        ))}
      </div>
      <div className="flex flex-wrap justify-center mb-10 space-y-2 space-x-2 items-center sm:justify-between p-2 m-2">
        <h2 className="font-bold text-2xl">
          SubTotal : ₹ {Math.floor(cartTotal)}
        </h2>
        <div className="flex flex-row space-x-2">
          <button className="text-white bg-gradient-to-r from-teal-800 to-rose-600 shadow-lg shadow-rose-600/50 justify-self-end font-medium bg-teal-900 rounded-md p-2 text-center text-sm ">
            Checkout
          </button>
          <button
            className="text-white bg-gradient-to-r from-teal-800 to-rose-600 shadow-lg shadow-rose-600/50  font-medium bg-teal-900 rounded-md p-2 text-center text-sm "
            onClick={() => dispatch(empty())}
          >
            Empty Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
