let http = require('http')
let callback = function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'})
    response.end('Hello World in Node with callback funtion\n');
}

let server = http.createServer(callback);
server.listen(3000)
console.log('Server running at http://localhost:3000, with callback');