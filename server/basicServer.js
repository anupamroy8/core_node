
// 1. Write script to create a basic http server using createServer method, write 'Welcome to NodeJS' as response and
// listen for request on port 5555.
// var http = require('http');

// var server = http.createServer(handleRequest);

// function handleRequest(req, res) {
//   res.end("Welcome to NodeJS");
// }

// server.listen(5555, ()=> {
//   console.log("Server started at port 5555");
// })


// 2. Write script to create a server, send in response the request headers 
// and add listener on port 6666.

// var http = require('http');

// var server = http.createServer(handleRequest);

// function handleRequest(req, res) {
//   console.log(req.method);
//   res.end(JSON.stringify(req.headers));
// }

// server.listen(5555, ()=> {
//   console.log("Server started at port 5555");
// })

// 3. create a server and console request methods and url by doing request 
// from postman or web browsers.

// var http = require('http');

// var server = http.createServer(handleRequest);

// function handleRequest(req, res) {
//   console.log(req.method);
//   res.end(JSON.stringify(req.headers));
// }

// server.listen(5555, ()=> {
//   console.log("Server started at port 5555");
// })

// 4. create a server
  // - set response headers as 'text/html' using res.setHeader property.
  // - write some HTML content in response
  // - listen on port 6000

  // var http = require('http');

  // var server = http.createServer(handleRequest);
  
  // function handleRequest(req, res) {
  //   console.log(req.method);
  //   res.setHeader("content-type", "text/html")
  //   res.end("<h1>Welcome to NodeJS</h1>");
  // }
  
  // server.listen(6000, ()=> {
  //   console.log("Server started at port 6000");
  // })

// 5. create a server
  // - create a seperate file index.html and write some html content
  // - read the html file content and send it in response in createServer method
  // - don't forget to set header before writing to response

  // var http = require("http");
  // var fs = require("fs");

  // var server = http.createServer(handleRequest);
  
  // function handleRequest(req, res) {
  //   if(req.url === '/'){
  //     fs.createReadStream("./index.html").pipe(res)
  //   } else {
  //     res.end("Page not found")
  //   }
  // }
  
  // server.listen(3000, ()=> {
  //   console.log("Server started at port 3000");
  // })


// 6. create a server
  // - create 3 diffenrent file ie. indx.html, about.html, contact.html
  // - inside createServer, handle different urls for serving different html file
  // - '/' route for index.html file
  // - "/about" for about.html file
  // - "/contact" for contact.html file

  // var http = require("http");
  // var url = require("url");
  // var fs = require("fs");

  // var server = http.createServer(handleRequest);


  // function handleRequest(req, res) {
  //   var parsedUrl = url.parse(req.url, true)
  //   if(parsedUrl.path === '/'){
  //     fs.createReadStream("./index.html").pipe(res)
  //   } else if(parsedUrl.path === '/about') {
  //     fs.createReadStream("./about.html").pipe(res)
  //   } else if(parsedUrl.path === '/contact') {
  //     fs.createReadStream("./contact.html").pipe(res)
  //   } else {
  //     res.end("Page not found")
  //   }
  // }
  
  // server.listen(3000, ()=> {
  //   console.log("Server started at port 3000");
  // })

// 7. create an Server(echoServer)
  // handle post request for incoming data from postman using req as eventEmitter
  // send incoming data back in response

  // var http = require("http");
  // var url = require("url");
  // var fs = require("fs");

  // var server = http.createServer();

  // server.on("request", (req,res) => {
  //   var store = "";
  //   req.on("data", (c)=> {
  //     store = store +c;
  //   })
  //   req.on("end", () => {
  //     console.log(store);
  //     res.end(store)
  //   })
  // })

  // server.listen(3000, ()=> {
  //   console.log("Server started at port 3000");
  // })


// 8. create a server
  // handle json data from postman
  // parse the json data
  // send json data back in response

  // var http = require("http");
  // var url = require("url");
  // var fs = require("fs");

  // var server = http.createServer();

  // server.on("request", (req,res) => {
  //   var store = "";
  //   req.on("data", (c)=> {
  //     store = store +c;
  //   })
  //   req.on("end", () => {
  //     res.setHeader("content-type", "application/json")
  //     res.end(store);
  //   })
  // })

  // server.listen(3000, ()=> {
  //   console.log("Server started at port 3000");
  // })


// 9. create a server
  // handle x-www-urlencoded(form data) coming form postman
  // parse form-data using querystring module
  // send data back in response

  // var http = require("http");
  // var url = require("url");
  // var fs = require("fs");
  // var qs = require("querystring");

  // var server = http.createServer();

  // server.on("request", (req,res) => {
  //   var store = "";
  //   req.on("data", (c)=> {
  //     store = store +c;
  //   })
  //   req.on("end", () => {
  //     var parsedData =  qs.parse(store)
  //     console.log(parsedData);
  //     res.end(parsedData.name);
  //   })
  // })

  // server.listen(3000, ()=> {
  //   console.log("Server started at port 3000");
  // })


// 10. create a server and add listener on port 7000
  // send get request on 'http://localhost:7000/new?username=altcampus' from postman or browser
  // parse the request url using 'url' core node module
  // extract protocol, path and pathname, query from the request
  // send path in response;

  // var http = require("http");
  // var url = require("url");
  // var fs = require("fs");

  // var server = http.createServer(handleRequest);
  // function handleRequest(req, res) {
  //   var parsedUrl = url.parse(req.url, true)
  //   console.log(parsedUrl.protocol);
  //   console.log(parsedUrl.path);
  //   console.log(parsedUrl.pathname);
  //   console.log(parsedUrl.query);
  //   res.end(parsedUrl.path)
  // }
  
  // server.listen(7000, ()=> {
  //   console.log("Server started at port 7000");
  // })

// 11. Write script to create an absolute and relative path of 'theory.md' from the current file.
  // use path module from core node

  var http = require("http");
  var path = require("path");

  let filePath = path.join(__dirname, ".theory.md")
  console.log(filePath);
  
  let relPath = ("./theory.md")
  console.log(relPath);

  var server = http.createServer(handleRequest);
    function handleRequest(req, res) {
    res.end("Done")
    }
  server.listen(7000, ()=> {
    console.log("Server started at port 7000");
  })
