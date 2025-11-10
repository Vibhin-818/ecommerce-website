const r = require('express').Router()
const O = require('../models/order')

r.post('/', async (req,res)=>{ const o = new O(req.body); await o.save(); res.status(201).json(o) })
r.get('/:id', async (req,res)=>{ const o = await O.findById(req.params.id); if(!o) return res.status(404).json({msg:'no'}); res.json(o) })
module.exports = r
