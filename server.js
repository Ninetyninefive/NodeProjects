const http = require('http');
const { myDateTime } = require('./myFirstModule');
const server = http.createServer(function(req, res){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>' + myDateTime() + '</h1>');
});

server.listen(3000, '127.0.0.1', function(){
    console.log('server started listening on port 3000')
});