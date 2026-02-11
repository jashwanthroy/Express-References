const express = require("express")
const app = express()
const port = 3000


//.static()
app.use(express.static("public"))
app.use(express.json())

// get request
app.get("/",(req,res)=>{
    res.status(200).send("Hello Express!!!")
    console.log("Home Got a Hit!!")
})
app.get("/about",(req,res)=>{
    res.status(200).send("About Page")
    console.log("About Got a Hit!!") 
})
app.get("/users",(req,res)=>{
    res.status(200).send(users);
    console.log("Users Got Hit!!")
})

// app.use((req,res)=>{
//     res.status(404).send('<h1>Resource Not Found</h1>')
// })

//POST Request
let users = [
    {id: 1,name: "jashh"},
    {id: 2,name: "thann"}
]
app.post("/users",(req,res)=>{
    const newUser = {
        id: users.length + 1,
        name: req.body.name
    };
    users.push(newUser)
    res.status(200).json(newUser)
})

//PUT Request
app.put("/users/:id",(req,res)=>{
    const id = parseInt(req.params.id)
    const user = users.find(u => u.id === id)
    if(!user){
        return res.status(404).json({message: "User not found"})
    }
    user.name = req.body.name;
    res.json(user)
})


app.listen(port,()=>{
    console.log(`App is Listening on Port ${port}`)
})