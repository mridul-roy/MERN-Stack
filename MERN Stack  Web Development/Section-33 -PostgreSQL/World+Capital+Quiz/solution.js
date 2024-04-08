import express from "express";
import bodyParser from "body-parser";
import pg from "pg";



const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "PG_Demo",
  password: "arnob",
  port: 5432,
});

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let quiz = [];

// Connect to the database and start the server
db.connect()
  .then(() => {
    console.log("Connected to PostgreSQL database");
    // Retrieve data from the database
    return db.query("SELECT * FROM capital");
  })
  .then((result) => {
    quiz = result.rows;
    console.log("Quiz data loaded from the database");
  })
  .catch((err) => {
    console.error("Error connecting to PostgreSQL:", err);
  })
  .finally(() => {
    // Start Express server after loading quiz data
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  });

let totalCorrect = 0;
let currentQuestion = {};

// GET home page
app.get("/", async (req, res) => {
  totalCorrect = 0;
  await nextQuestion();
  console.log(currentQuestion);
  res.render("index.ejs", { question: currentQuestion });
});

// POST a new post
app.post("/submit", (req, res) => {
  let answer = req.body.answer.trim();
  let isCorrect = false;
  if (currentQuestion.capital.toLowerCase() === answer.toLowerCase()) {
    totalCorrect++;
    console.log(totalCorrect);
    isCorrect = true;
  }

  nextQuestion();
  res.render("index.ejs", {
    question: currentQuestion,
    wasCorrect: isCorrect,
    totalScore: totalCorrect,
  });
});

async function nextQuestion() {
  const randomCountry = quiz[Math.floor(Math.random() * quiz.length)];
  currentQuestion = randomCountry;
}
