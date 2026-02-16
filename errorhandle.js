const express = require("express")
const app = express()
const fs = require("fs")
const errorHandler = require("./errorMdw")
const Customerror = require("./customerror")
// Sync Error
app.get("/",(req,res)=>{
    throw new Customerror("Broken",404);
})

// app.get("/",(req,res,next)=>{
//     fs.readFile("/file-does-not-exist",(err,data)=>{
//         if(err){
//             next(err)
//         }else{
//             res.send(data)
//         }
//     })
// })
app.use(errorHandler) 

app.listen(3000,()=>{
    console.log("Server listening on 3000")
})