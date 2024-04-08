const fs = require("fs");


// fs.writeFile("messege.txt","Hello, I am from Node!!!",(err)=>{
// if (err) throw err;
// console.log("Messege is successfully saved");
// });

fs.readFile("./messege.txt","utf8",(err, data)=> {
    if (err) throw err;
    console.log(data);
  })