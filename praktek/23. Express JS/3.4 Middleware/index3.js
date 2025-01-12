import express from "express";
import Logger from './Logger.js';

const app = express();
const port = 3000;

app.use(Logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
