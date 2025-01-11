import { image } from "qr-image";
import { createWriteStream, writeFile, appendFile } from "node:fs";
import inquirer from "inquirer";
import pkg from "extfs";
const { isEmpty } = pkg;

// soal untuk kasih link
const question = {
  type: "input",
  name: "url",
  message: "enter your url..",
  validate(value) {
    const correct = value.includes(".");
    if (correct) {
      return true;
    } else {
      console.log("\nenter a valid url");
      process.exit(1);
    }
  },
};

//input untuk kasih link
inquirer.prompt(question).then((answer) => {
  console.log(JSON.stringify(answer));
  const correct = answer.url.includes(".");
  if (correct) {
    isEmpty("URL.txt", function (empty) {
      if (empty === false) {
        // append
        appendFile("URL.txt", `\n${answer.url}`, (err) => {
          if (err) throw err;
          console.log("file has been appended");
        });
      } else {
        // add new data
        writeFile("URL.txt", answer.url, (err) => {
          if (err) throw err;
          console.log("new content has added");
        });
      }
    });
  }
  //generate qr
  var qr_svg = image(`${answer.url}`, { type: "svg" });
  qr_svg.pipe(createWriteStream(`./qr/${answer.url}.svg`));
});

/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
