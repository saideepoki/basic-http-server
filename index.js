const http  = require('http');
const fs = require('fs');
const port = 8000;

function requestHandler(req, res) { // handling requests and rendering required html files demanded by the browser
  console.log(req.url);
  res.writeHead(200,{contentType: 'text/html'}); // meta info about what the server sends to the client
  let filePath;
  switch(req.url) {
    case '/' : {
        filePath = 'index.html';
        break;
    }
    case '/about': {
        filePath = 'about.html';
        break;
    }
    case '/contact': {
        filePath = 'contact.html';
        break;
    }
    default : {
        filePath = '404.html';
        break;
    }
  }
  fs.readFile(filePath,function(err,data) {
   if(err) {
    return res.end("Error",err);
   }
   return res.end(data);
  });
}

const server = http.createServer(requestHandler); // creating the server

server.listen(port, function(err) {  // starting the server at the port
  if(err) {
    console.log(err);
    return;
  }
  console.log("Server is up and is running:",port);
});