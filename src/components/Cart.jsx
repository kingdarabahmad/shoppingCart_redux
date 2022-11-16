import React, { useEffect } from 'react'
import CartCard from './CartCard'
import { useSelector,useDispatch } from 'react-redux'
import {add, empty } from '../redux/features/cartSlice'



const Cart = () => {
  const dispatch= useDispatch()

  let cartData=useSelector((state)=>state.cart)

  useEffect(()=>{
    localStorage.setItem("cart",JSON.stringify(cartData))
  },[cartData])
  
  useEffect(()=>{
    let data= JSON.parse(localStorage.getItem("cart")|| '[]')
    console.log(data)

  },[])


  const cartTotal=cartData.reduce((acc,cur)=>(acc + cur.price),0)
  return (<>
    <div className=' flex flex-row flex-wrap space-x-4 justify-center mt-5'>
      {cartData.map((items)=>(
        <CartCard
        id={items.id}
          key={items.id}
          title={items.title}
          price={items.price}
          image={items.image}
        />
      ))}
    </div>
    <div className='flex flex-wrap justify-center space-y-2 space-x-2 items-center sm:justify-between p-2 m-2'>
    <h2 className='font-bold'>SubTotal : ₹ {Math.floor(cartTotal)}</h2>
    <div className='flex flex-row space-x-2'>
    <button className="text-white justify-self-end font-medium bg-teal-900 rounded-md p-2 text-center text-sm ">Checkout</button>
    <button className="text-white  font-medium bg-teal-900 rounded-md p-2 text-center text-sm "
    onClick={()=>dispatch(empty())}>Empty Cart</button>

    </div>


    </div>
  </>
  )
}

export default Cart