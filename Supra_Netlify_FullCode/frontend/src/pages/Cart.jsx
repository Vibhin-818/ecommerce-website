import React from 'react'
import { useCart } from '../context/CartCtx'
export default function Cart(){
  const {it,rm,clear,tot} = useCart()
  const place = async()=>{
    const b={items:it.map(x=>({productId:x._id,name:x.name,qty:x.qty,price:x.price})),total:tot,customer:{name:'supra user',email:'a@b.com',addr:'addr'}}
    const r = await fetch((import.meta.env.VITE_BACKEND_URL||'') + '/api/orders',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(b)})
    const j = await r.json(); clear(); alert('order '+j._id)
  }
  return (
    <div>
      <h1>Cart</h1>
      {it.map(x=><div key={x._id}>{x.name} x {x.qty} ₹{x.price*x.qty} <button className="ml-2 px-2 py-1 bg-red-500 text-white rounded" onClick={()=>rm(x._id)}>rm</button></div>)}
      <div className="mt-4">Total ₹{tot}</div>
      <button className="mt-2 px-3 py-1 bg-green-600 text-white rounded" onClick={place}>Place</button>
    </div>
  )
}
