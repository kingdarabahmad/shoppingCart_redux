import { useState } from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Navbar from './components/Navbar'
import Products from './components/Products'
import Cart from './components/Cart'
function App() {


  return <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path='/' element={<Products/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
  </BrowserRouter>
}

export default App
