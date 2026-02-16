require('dotenv').config()

const express = require("express")
const app = express()

const PORT = process.env.PORT || 3000

app.get("/",(req,res)=>{
    res.send("Environment Variables in EXPRESS")
})

app.listen(PORT,()=>{
    console.log(`SERVER LIstening on ${PORT}`)
})