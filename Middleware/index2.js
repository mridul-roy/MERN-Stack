import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use(morgan('combined'))
 
app.get('/m', function (req, res) {
  res.send('hello, world!')
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
