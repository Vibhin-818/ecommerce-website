import React,{createContext,useContext,useState} from 'react'
const C = createContext()
export function useCart(){return useContext(C)}
export function CartProvider({children}){
  const [it,setIt] = useState([])
  const add = (p,q=1)=>{ const i = it.find(x=>x._id===p._id); if(i) setIt(it.map(x=>x._id===p._id?{...x,qty:x.qty+q}:x)); else setIt([...it,{...p,qty:q}]) }
  const rm = id => setIt(it.filter(x=>x._id!==id))
  const clear = ()=> setIt([])
  const tot = it.reduce((s,x)=>s+x.price*x.qty,0)
  return <C.Provider value={{it,add,rm,clear,tot}}>{children}</C.Provider>
}
