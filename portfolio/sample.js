const http = require("http");
const fs = require("fs");
const url = require("url");
const qs = require("querystring");

var userPath = __dirname + "/data/";
console.log(userPath);

var server = http.createServer();

server.on("request", (req,res) => {
    console.log(req.url)
    var parsedUrl = url.parse(req.url)
    var store = "";

    req.on('data', (chunk) => {
        store = store + chunk;
    })

    if ( parsedUrl.pathname === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'})
        fs.createReadStream("./index.html").pipe(res); 
    }
    else if ( parsedUrl.pathname === '/index.html') {
        res.writeHead(200, {'Content-Type': 'text/html'})
        fs.createReadStream("./index.html").pipe(res); 
    }
    else if ( parsedUrl.pathname === '/register.html') {
        res.writeHead(200, {'Content-Type': 'text/html'})
        fs.createReadStream("./register.html").pipe(res); 
    }
    else if(req.url === '/register.html' && req.method === 'POST') {
        req.on('end', () => {
            console.log("Inside POST")
            var username = qs.parse(store).username;
            var parsedData = qs.parse(store);
            console.log(parsedData);
            
            res.writeHead(201, {'content-type' : 'text/plain'})

            fs.open(userPath+username+".json", "wx", (err, fd) => {
                if (err) return console.error(err);
                fs.writeFile(fd, JSON.stringify(parsedData), (err) => {
                    if(err) return console.error(err);
                    fs.close(fd, (err) => {
                        if(err) return console.error(err);
                        res.end(username + " file created sucessfully");
                    })
                })
            })
        })    
    }
    else if ( parsedUrl.pathname === '/schedule.html') {
        res.writeHead(200, {'Content-Type': 'text/html'})
        fs.createReadStream("./schedule.html").pipe(res); 
    }
    else if ( parsedUrl.pathname === '/speakers.html') {
        res.writeHead(200, {'Content-Type': 'text/html'})
        fs.createReadStream("./speakers.html").pipe(res); 
    }
    else if ( parsedUrl.pathname === '/venue.html') {
        res.writeHead(200, {'Content-Type': 'text/html'})
        fs.createReadStream("./venue.html").pipe(res); 
    }
    else if ( req.url.includes("css")){
        fs.createReadStream(`.${req.url}`).pipe(res)
    }
    else if ( req.url.includes("jpg")) {
        // res.writeHead(200, {'Content-Type': 'images/jpg'})
        fs.createReadStream(`.${req.url}`).pipe(res);
    }
    else {
        res.end("<h1> 404 Page not found </h1>")
    }
});

