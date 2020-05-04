// var fs = require('fs');

// Use fs module for all operatins below.


// 1. Write script to read file theory.md and console the output buffer.

// const fs = require("fs");
// fs.readFile('./theory.md', (err, file) => {
//     if(err) return console.log(err);
//     console.log(file);
// });


// 2. Write script to read file theory.md and convert resulted buffer using toString
  // method and console the result.

  // const fs = require("fs");
  // fs.readFile('./theory.md', (err, file) => {
  //     if(err) return console.log(err);
  //     console.log(file.toString());
  // });

// const fs = require("fs");
// var file = fs.readFileSync('./theory.md');
// console.log(file.toString());

// 3. Write script to read file Synchronously and console the output.

// const fs = require("fs");
// var file = fs.readFileSync('./theory.md');
// console.log(file);

// 4. Write script to create a file 'write.js' and write content of read.js in there.

// const fs = require("fs");
// fs.readFile("./read.js", (err,data) => {
//   if(err) return console.log(err);
//   fs.writeFile("./write.js", data, (err) => {
//     if (err) return console.log(err);
//   })
// })

// 5. Write script to update content of write.js. Update it with content of theory.md
//   Steps are
//   - open the file(write.js) using fs.open
//   - remove earlier content using fs.ftruncate
//   - add new content using fs.writeFile
//   - close the file at last using fs.close

// const fs = require("fs");
// fs.open("./write.js", 'r+', (err, fd) => {
//   if(err) return console.log('error opening file');
//   fs.ftruncate(fd,(err) => {
//     if (err) return console.log(err);
//     var data = fs.readFileSync('./theory.md');
//     fs.writeFile(fd, data, (err) => {
//       if (err) return console.log(err);
//       fs.close(fd, (err) => {
//         if (err) return console.log(err);
//       })
//     })  
//   })
// })

// 6. Delete the content of write.js using fs.unlink or unlinkSync method

// const fs = require("fs");
// fs.unlink("./write.js", (err) => {
//   if (err) return console.log(err);
//   console.log("Delete Sucessful");
// })