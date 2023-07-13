import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();

import connectDB from "./db/connect.js";
//middleware

import notFoundMiddleware from "./middlewares/not-found.js";
import errorHandlerMiddleware from "./middlewares/error-handler.js";

app.get("/", (req, res) => {
  throw new Error("error");
  res.send("Welcome!");
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);
const port = process.env.PORT;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is Listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
