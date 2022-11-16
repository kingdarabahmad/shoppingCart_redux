import React from "react";
import { add } from "../redux/features/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const ProductCard = ({ title, price, image ,items }) => {

    const dispatch=useDispatch()
    const cartItems=useSelector((state)=>state.cart)

    const CartItemsIds=cartItems.map((item)=>(item.id))

const handleAdd=(item)=>{
    dispatch(add(items))
}
  return <div className="flex  flex-col items-center shadow-xl rounded-lg w-[18rem] justify-evenly h-[25rem] p-2 m-4">
  <img src={image} alt="product" className="w-full h-[50%] object-contain p-2"/>
  <h2 className="font-bold text-center p-2">{title}</h2>
  <h3 className="font-semibold">₹ {price}</h3>

{CartItemsIds.includes(items.id)?
(<h2 className="font-bold text-teal-900">Added to Cart</h2>):
(<button className="text-white  font-medium bg-teal-900 rounded-md p-2 text-center text-sm h-[10%]"
  onClick={()=>handleAdd(items)} >Add to Cart</button>)}

  

  </div>
    
};

export default ProductCard;
