const fs = require("fs");

// let readingFile = fs.readFileSync("text.txt", "utf8");
// let readFile = fs.readFile("text.txt", "utf8", (err, data) => {

//     console.log(data);
//   })

  let writeFilesync = fs.writeFileSync("text.txt", "HI, My name is Arham maqsood")
  
  let writeFile = fs.writeFileSync("data.txt", "I am a web developer", "utf-8", (err,data) => {
    if(err){
        console.log(err);
    }

    console.log(data);