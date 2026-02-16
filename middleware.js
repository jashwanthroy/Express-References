const express = require("express")
const morgan = require("morgan")
const app = express()
const router = express.Router()

//Application lvl
// app.use((req,res,next)=>{
//     console.log("Application Lvl MW");
//     console.log(`Request Method: ${req.method}, URL: ${req.url}, Time: ${Date.now()}`)
//     next();
// })
// app.get("/",(req,res)=>{
//     res.send("Hello Express!!")
// })


//Router lvl
// router.use((req,res,next)=>{
//     console.log(`${req.originUrl}`)
//     next()
// })
// router.get("/",(req,res)=>{
//     res.send("Router MiddleWare");
// })
// app.use("/router",router)


//Error Handling Middleware
// app.get("/",(req,res)=>{
//     throw new Error('BROKEN')
// })
// app.use((err,req,res,next)=>{
//     console.log(err.stack);
//     res.status(500).send("Something BROKE!!");
// })

//Builtin Middleware
app.post("/data",(req,res)=>{
    res.send(`Recieved Data: ${JSON.stringify(req.body)}`)
})
app.use(express.json());

//Third Party Middleware
// app.use(morgan('combined'))
// app.get("/",(req,res)=>{
//     res.send("Loggin with Morgan!!")
// })


app.listen(3000,()=>{
    console.log("App started on port 3000")
})