import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { useCart } from '../context/CartCtx'
import { useTranslation } from 'react-i18next'
export default function Product(){
  const {id} = useParams(); const [p,setP]=useState(null); const {add} = useCart(); const {i18n} = useTranslation()
  useEffect(()=>{ const l=i18n.language||'en'; fetch((import.meta.env.VITE_BACKEND_URL||'') + '/api/products/'+id+'?lang='+l).then(r=>r.json()).then(setP).catch(e=>console.error(e)) },[id,i18n.language])
  if(!p) return <div>loading</div>
  return (<div><h2>{p.name}</h2><p>{p.desc}</p><div>₹{p.price}</div><button className="mt-2 btn px-3 py-1 bg-blue-600 text-white rounded" onClick={()=>add(p)}>Add</button></div>)
}
