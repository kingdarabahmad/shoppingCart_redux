import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartData = useSelector((state) => state.cart);
  return (
    <nav className=" fixed top-0 flex flex-col bg-white sm:flex-row w-full sm:px-4 py-2 space-y-2 sm:py-4 shadow-lg shadow-gray-800/50 items-center justify-between">
      <div>
        <Link to="/">
          <h1 className=" font-extrabold text-4xl tracking-wider  bg-clip-text text-transparent bg-gradient-to-r from-teal-800 to-rose-600">
            E-Shop
          </h1>
        </Link>
      </div>
      <div className="flex space-x-4 ">
        <Link to="/">
          <h2 className="font-bold text-xl text-teal-800 ">Products</h2>
        </Link>
        <Link to="/cart">
          <h2 className="font-bold text-xl text-teal-800 ">Cart</h2>
        </Link>
      </div>
      <div>
        <h3 className="font-bold text-teal-800 text-xl">
          Cart Items: <span className="text-rose-800">{cartData.length}</span>{" "}
        </h3>
      </div>
    </nav>
  );
};

export default Navbar;
