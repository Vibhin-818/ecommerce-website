const m = require('mongoose')
const s = new m.Schema({
  name: { en:String, hi:String, ta:String, te:String },
  desc: { en:String, hi:String, ta:String, te:String },
  price: Number,
  qty: Number,
  img: String,
  cat: String,
  createdAt:{type:Date,default:Date.now}
})
module.exports = m.model('Product',s)
