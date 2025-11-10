const m = require('mongoose')
require('dotenv').config()
const P = require('./models/product')

m.connect(process.env.MONGO_URI).then(async ()=>{
  await P.deleteMany({})
  await P.insertMany([
    { name:{en:'Classic Running Shoe', hi:'क्लासिक रनिंग शू', ta:'கிளாசிக் ரன்னிங் ஷூ', te:'క్లాసిక్ రన్నింగ్ షూ'}, desc:{en:'Lightweight shoe', hi:'हल्का जूता', ta:'ஒளி எடை செருப்பு', te:'లైట్‌వెయిట్ షూ'}, price:1999, qty:50, img:'', cat:'foot' },
    { name:{en:'Canvas Backpack', hi:'कैनवास बैकपैक', ta:'கான்வாஸ் பேக்', te:'కేన్వాస్ బ్యాక్‌ప్యాక్'}, desc:{en:'Daily carry bag', hi:'दैनिक बैग', ta:'தினசரி பை', te:'డైలీ బ్యాగ్'}, price:899, qty:100, img:'', cat:'bag' },
    { name:{en:'Wireless Earbuds', hi:'वायरलेस ईयरबड', ta:'வயர்லெஸ் ஈர்பட்', te:'వైరలెస్ ఇయర్‌బడ్'}, desc:{en:'Bluetooth earphones', hi:'ब्लूटूथ ईयरफोन', ta:'ப்ளூடூத் காதணி', te:'బ్లూటూత్ ఇయర్బడ్'}, price:2499, qty:80, img:'', cat:'audio' }
  ])
  console.log('seed done'); process.exit()
}).catch(e=>console.error(e))
