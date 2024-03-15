import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

var bandName = " "

const app = express();
const port = 3000;

app.use(express.urlencoded({extended: true}));

function bandNameGenerator(req,res,next){
  bandName = req.body["street"] + req.body["pet"];
  next();

}

app.use(bandNameGenerator);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res)=> {
  res.send(`Your Band Name is: ${bandName}`);
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
