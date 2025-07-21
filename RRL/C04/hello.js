let http = require('http');
let url = require('url');
let callback = function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    let parts = url.parse(request.url);
    if (parts.path == '/'){
        response.end("Raiz do site /.")
    } else if (parts.path == '/carros'){
        response.end('rota do site /carros.')
    }
}

let server = http.createServer(callback);
server.listen(3000)
console.log('Server running at http://localhost:3000, servidor carros');