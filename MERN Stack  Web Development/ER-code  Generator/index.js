import qr from "qr-image";
import inquirer from "inquirer";
import fs from "fs";



inquirer
  .prompt([

    {
        //type:"input",
        "name": "email",
        "messege": "Enter your email address : "
    }
  ])
  .then((answers) => {
    // console.log(answers.uname);
    // console.log(answers.email);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

