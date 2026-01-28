require('dotenv').config()
console.log("Hello, Pralabh");
const express = require('express')
const app = express()
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello!')
})

app.get('/instagram', (req,res)=>{
    res.send("herr_pralabh_07")
})
app.get('/facebook', (req,res)=>{
    res.send('Pralabh Mishra ')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
