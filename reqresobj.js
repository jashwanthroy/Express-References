const express = require("express");
const path = require("path")
const app = express();

//REQUEST OBJECT
//Accessing Query Parameters
app.get("/search", (req, res) => {
  const param = req.query.q;
  if (param) {
    res.send(`Search Query: ${param}`);
  } else {
    res.status(400).send("Query Parameter q is required");
  }
});
//Accessing Route Parameters
app.get("/user/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`User Id: ${userId}`);
});

//Accessing Request Body
app.use(express.json());
app.post("/profile", (req, res) => {
  const bod = req.body;
  res.send(`Recieved data: ${JSON.stringify(bod)}`);
});

//Accessing HTTP Body
app.all("/method", (req, res) => {
  const method = req.method;
  res.send(`HTTP Method used in request: ${method}`);
});

//Accessing Request URL
app.get("/request-url", (req, res) => {
  const requrl = req.url;
  res.send(`The request URL is: ${requrl}`);
});

//Accessing Request Headers
app.get("/headers", (req, res) => {
  const headers = req.headers;
  res.json(headers);
});

//RESPONSE OBJECT
//Sending Response

//as text
app.get("/text",(req,res)=>{
    res.send("Text as Response!!!");
})

//as html
app.get("/html",(req,res)=>{
    res.send('<h1> Hello Express This is a <p> HTML RESPONSE </p></h1>')
    console.log("HTML RESPONSE!!!")
})

//json response
app.get("/json",(req,res)=>{
    // res.send({message: 'This is a JSON Response'})
    const data = {
      name: "Jashh",
      age: 23,
      occupation: "Software Engineer"
    }
    res.json(data)
})

//status response
app.get("/status",(req,res)=>{
  res.send("Status of 200 SUCCESS!!").status(404)
})

//Redirecting to new URL
app.get("/url",(req,res)=>{
  res.redirect(301,"https://www.youtube.com")
})

//rendering views
app.set('view engine','ejs') //embedded javascript
app.set('views',path.join(__dirname,'views'))
app.get("/render",(req,res)=>{
  res.render('index',{title: 'Express Render Example',name: 'Jashwanth'})
})


app.listen(3000, () => {
  console.log("Server running on Port 3000");
});
