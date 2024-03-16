import express from "express";

const app = express();
const port = 3000;

app.get("/",(req,res) =>{
    res.render("index.ejs",{
        dayType: "Week Day. ",
        advice: "Its time to work hard."
    });
})



app.listen(port,() => {
    console.log(`Server is connectes on port ${port}.`);
})