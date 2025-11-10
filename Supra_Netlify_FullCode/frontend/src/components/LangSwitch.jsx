import React from 'react'
import { useTranslation } from 'react-i18next'
export default function L(){ const {i18n} = useTranslation(); const set=l=>i18n.changeLanguage(l)
  return (<div className="flex gap-2"><button className="px-2 py-1 rounded bg-gray-200" onClick={()=>set('en')}>EN</button><button className="px-2 py-1 rounded bg-gray-200" onClick={()=>set('hi')}>हिं</button><button className="px-2 py-1 rounded bg-gray-200" onClick={()=>set('ta')}>தமிழ்</button></div>) }
