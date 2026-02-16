const express = require("express")
const path = require("path")
const app = express()
const port = 3000



// app.use(express.json())
//sends all the files in the particular (public) folder
// app.use(express.static("public"))
//sends on the mentioned file as response
// app.get("/",(req,res)=>{
//     res.sendFile(path.resolve(__dirname,"./public/index.html"))
// })




// get request
// app.get("/",(req,res)=>{
//     res.status(200).send("Hello Express!!!")
//     console.log("Home Got a Hit!!")
// })
// app.get("/about",(req,res)=>{
//     res.status(200).send("About Page")
//     console.log("About Got a Hit!!") 
// })
// app.get("/users",(req,res)=>{
//     res.status(200).send(users);
//     console.log("Users Got Hit!!")
// })

// app.use((req,res)=>{
//     res.status(404).send('<h1>Resource Not Found</h1>')
// })

//POST Request
// let users = [
//     {id: 1,name: "jashh"},
//     {id: 2,name: "thann"}
// ]
// app.post("/users",(req,res)=>{
//     const newUser = {
//         id: users.length + 1,
//         name: req.body.name
//     };
//     users.push(newUser)
//     res.status(200).json(newUser)
// })

//PUT Request
// app.put("/users/:id",(req,res)=>{
//     const id = parseInt(req.params.id)
//     const user = users.find(u => u.id === id)
//     if(!user){
//         return res.status(404).json({message: "User not found"})
//     }
//     user.name = req.body.name;
//     res.json(user)
// })

//Using routers
//userRouter
const userRouter = require("./routes/users.routes")
//Mounting a Router
app.use("/users",userRouter)
//productRouter
const productRouter = require("./routes/products.routes")
app.use("/products",productRouter)


app.listen(port,()=>{
    console.log(`App is Listening on Port ${port}`)
})