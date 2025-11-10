import React from 'react'
import { Link } from 'react-router-dom'
import L from './LangSwitch'
import { useCart } from '../context/CartCtx'
import { useTranslation } from 'react-i18next'
export default function H(){
  const {it} = useCart(); const {t} = useTranslation()
  return (
    <div className="flex items-center justify-between bg-gray-900 text-white p-3">
      <div className="flex items-center gap-4"><Link to="/" className="text-2xl font-bold">supra</Link></div>
      <div className="flex items-center gap-4">
        <L/>
        <Link to="/cart">{t('cart')} ({it.length})</Link>
      </div>
    </div>
  )
}
