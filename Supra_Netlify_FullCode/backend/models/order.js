const m = require('mongoose')
const s = new m.Schema({
  items:[{productId:{type:m.Schema.Types.ObjectId,ref:'Product'},name:String,qty:Number,price:Number}],
  total:Number,
  customer:{name:String,email:String,addr:String},
  status:{type:String,default:'pending'},
  createdAt:{type:Date,default:Date.now}
})
module.exports = m.model('Order',s)
