import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import Cart from './pages/Cart'
import { CartProvider } from './context/CartCtx'
import Header from './components/Header'

export default function App(){
  return (
    <CartProvider>
      <Header/>
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/p/:id" element={<Product/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </div>
    </CartProvider>
  )
}
