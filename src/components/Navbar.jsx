import React from "react";
import {Link} from "react-router-dom"
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartData=useSelector((state)=>state.cart)
  return (
    <nav className="flex flex-col sm:flex-row w-full sm:px-4 py-2 space-y-2 sm:py-4 shadow-lg items-center justify-between">
      <div>
        <h1 className=" font-bold text-2xl  text-teal-700">E-Shop</h1>
      </div>
      <div className="flex space-x-4 ">
      <Link to="/"><h2 className="font-medium text-teal-500">Products</h2></Link>
      <Link to="/cart"><h2 className="font-medium text-teal-500">Cart</h2></Link>


      </div>
      <div>
        <h3 className="font-medium text-teal-700">Cart Items: {cartData.length} </h3>
      </div>
    </nav>
  );
};

export default Navbar;
