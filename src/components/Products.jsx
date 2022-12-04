import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, search } from "../redux/features/productSlice";
import ProductCard from "./ProductCard";
import Loader from "./Loader";

const Products = () => {
  const dispatch = useDispatch();
  const { productsData, loading, error } = useSelector(
    (state) => state.products
  );
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    if (searchValue == "") {
      dispatch(fetchProducts());
    }
  }, [searchValue]);

  function handleChange(event) {
    const { value } = event.target;
    dispatch(search(value));
    setSearchValue(value);
  }

  if (loading) return <Loader />;

  return (
    <>
      <div className=" fixed top-40 sm:top-28 w-full flex justify-center items-center text-lg ">
        <input
          className=" outline-rose-600 bg-transparent border-2 border-rose-600 rounded-3xl p-2 text-center font-medium text-teal-800"
          type="text"
          placeholder="Search Item"
          onChange={handleChange}
          value={searchValue}
        />
      </div>
      <div className="w-full flex justify-center items-center ">
        {productsData.length === 0 ? (
          <h1 className="text-2xl text-rose-800 mt-60 sm:mt-52">
            No Product Found
          </h1>
        ) : (
          ""
        )}
      </div>

      <div className=" flex flex-row flex-wrap gap-10 justify-center mt-56 mb-16 sm:mt-44">
        {productsData.map((items) => (
          <ProductCard
            key={items.id}
            title={items.title}
            price={items.price}
            image={items.image}
            items={items}
          />
        ))}
      </div>
    </>
  );
};

export default Products;
