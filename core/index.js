//1. this is how most of javascript codes are executed which are present 
// in a file or in entire project.

// console.log('hello World');

// //4. Read file(theory.md) here using fs module and console the results of operation.

// const fs = require("fs");

// fs.readFile("./theory.md", (err,data) => {
//   console.log(data.toString());
// })

//6. Blocking code
//  Run it first and observe the output
 const fs = require("fs");
 var file = fs.readFileSync('./theory.md');
 console.log(file);
 console.log('run me first');
 
//  change it to run it in non-blocking manner.
//  Observe the difference in blocking and non-blocking code. 

//  const fs = require("fs");
//  var file = fs.readFile('./theory.md', (err, data) => {
//    return console.log(data);
//  });
//  console.log('run me first');

// 10. require math.js
  // console const pie and add and multiply function.

  // const math = require("./math");

  // console.log(math.pie);
  // console.log(math.sum(5,6));
  // console.log(math.multiply(2,3));
  
  // console.log(math.add(2,3));
    