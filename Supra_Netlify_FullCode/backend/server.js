const e = require('express')
const m = require('mongoose')
const c = require('cors')
require('dotenv').config()
const app = e()
app.use(c())
app.use(e.json())

m.connect(process.env.MONGO_URI).then(()=>console.log('db ok')).catch(err=>console.error(err))

const pRt = require('./routes/products')
const oRt = require('./routes/orders')
app.use('/api/products',pRt)
app.use('/api/orders',oRt)

const port = process.env.PORT || 5000
app.listen(port,()=>console.log('up',port))
