
import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { fetchProducts } from '../redux/features/productSlice'
import ProductCard from './ProductCard'

const Products = () => {
  const dispatch= useDispatch()
  const {productsData,loading,error}= useSelector((state)=>state.products)



  useEffect(()=>{
    dispatch(fetchProducts())

  },[])
  return (<>
    <div className=' flex flex-row flex-wrap space-x-4 justify-center mt-5'>
      {productsData.map((items)=>(
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
  )
}

export default Products