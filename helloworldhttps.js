var https = require('https');
var fs = require('fs');

var options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

var requestListener = function (req, res) {
  res.writeHead(200);
  res.end("hello world\n");
}

var server = https.createServer(options, requestListener);

server.listen(8000);

console.log('Web Server started on https, waiting for connections...');