import express from "express";

const app = express();

const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Welcome!");
});

app.listen(port, () => {
  console.log(`Server is Listening on port ${port}`);
});
