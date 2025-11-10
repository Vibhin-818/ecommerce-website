import React,{useEffect,useState} from 'react'
import Pc from '../components/ProdCard'
import { useCart } from '../context/CartCtx'
import { useTranslation } from 'react-i18next'

export default function Home(){
  const [ps,setPs] = useState([])
  const {add} = useCart()
  const {i18n,t} = useTranslation()
  useEffect(()=>{ const l = i18n.language||'en'; fetch((import.meta.env.VITE_BACKEND_URL||'') + '/api/products?lang='+l).then(r=>r.json()).then(setPs).catch(e=>console.error(e)) },[i18n.language])
  return (
    <div>
      <h1 className="text-3xl mb-4">{t('products')}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">{ps.map(p=> <Pc key={p._id} p={p} onAdd={add}/> )}</div>
    </div>
  )
}
