var http = require('http');
console.log('wokrign');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
     if (err) throw err;
  console.log('error!');
}).listen(8080);
