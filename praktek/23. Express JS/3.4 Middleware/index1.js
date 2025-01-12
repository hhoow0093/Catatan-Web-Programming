import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import morgan from "morgan";

const __dirname = dirname(fileURLToPath(import.meta.url));
const __filename = fileURLToPath(import.meta.url);


const app = express();
const port = 3000;

// menggunakan body-parser npm package sebagai middleware
app.use(bodyParser.urlencoded({ extended: true }));

// menggunakan morgan sebagai middleware untuk menunjukkan hasil request yang diberi
app.use(morgan("dev"));


app.get("/", (req, res) => {
  // console.log(__dirname);
  // console.log(`${__dirname + "/public/index.html"}`);
  // console.log(__filename);
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  console.log(req.body);
  res.sendFile(__dirname + "/public/index.html");
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
