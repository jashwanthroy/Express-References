const express = require("express")
const router = express.Router()

router.get("/",(req,res)=>{
    res.send("All users")
})

router.post("/",(req,res)=>{
    res.send("Create User")
})

router.get("/:id",(req,res)=>{
    res.send(`user Id : ${req.params.id}`)
})

module.exports = router