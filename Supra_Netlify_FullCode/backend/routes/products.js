const r = require('express').Router()
const P = require('../models/product')

function getLang(req){
  const q = req.query.lang || req.headers['accept-language'] || 'en'
  return q.split(',')[0].split('-')[0]
}

r.get('/', async (req,res)=>{
  const L = getLang(req)
  const ps = await P.find().lean().limit(200)
  const out = ps.map(p=>({ _id:p._id, name: p.name[L] || p.name.en || '', desc: p.desc[L] || p.desc.en || '', price:p.price, qty:p.qty, img:p.img, cat:p.cat }))
  res.json(out)
})

r.get('/:id', async (req,res)=>{
  const L = getLang(req)
  const p = await P.findById(req.params.id).lean()
  if(!p) return res.status(404).json({msg:'no'})
  res.json({ _id:p._id, name: p.name[L] || p.name.en || '', desc: p.desc[L] || p.desc.en || '', price:p.price, qty:p.qty, img:p.img, cat:p.cat })
})

r.post('/', async (req,res)=>{ const p = new P(req.body); await p.save(); res.status(201).json(p) })
r.put('/:id', async (req,res)=>{ const p = await P.findByIdAndUpdate(req.params.id,req.body,{new:true}); res.json(p) })
r.delete('/:id', async (req,res)=>{ await P.findByIdAndDelete(req.params.id); res.json({ok:true}) })

module.exports = r
