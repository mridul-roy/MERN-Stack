import express from "express";

const app = express();
const port = 1010;

app.get("/",(req,res)=>{
    res.send("<h2>Home Page</h2> <a href='http://localhost:1010/about'>About</a> <a href='http://localhost:1010/contract'>Contract Us</a>");
})

app.get("/about",(req,res)=>{
    res.send("<h2>About Me</h2><p>hello this is about page</p><a href='www.facebok.com'>Facebook</a>");
})

app.get("/contract",(req,res)=>{
    res.send("<h2>Contract with us</h2><h4>Phone: 019123456789</h4>");
})
app.listen(port,()=>{
    console.log(`Sarver is successfully run on port no: ${port}`);
})