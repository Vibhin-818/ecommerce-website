import React from 'react'
import { useTranslation } from 'react-i18next'
export default function Pc({p, onAdd}){
  const { i18n } = useTranslation(); const l = i18n.language || 'en'
  const name = p.name?.[l]||p.name?.en||''
  const desc = p.desc?.[l]||p.desc?.en||''
  const price = new Intl.NumberFormat(l==='hi'?'hi-IN':'en-IN',{style:'currency',currency:'INR'}).format(p.price)
  return (
    <div className="border p-4 rounded bg-white text-black">
      <h3 className="font-bold">{name}</h3>
      <p className="text-sm">{desc}</p>
      <div className="mt-2">{price}</div>
      <button className="mt-2 btn px-3 py-1 bg-blue-600 text-white rounded" onClick={()=>onAdd(p)}>Add</button>
    </div>
  )
}
