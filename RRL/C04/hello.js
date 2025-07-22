let http = require('http');
let url = require('url');
let fs = require('fs');
function readFile(response, file){
    fs.readFile(file, function(err, data){
        response.end(data);
    })
}
let callback = function(request, response) {
    response.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
    let parts = url.parse(request.url);
    let path = parts.path;
    if (parts.path == '/carros/classicos'){
        readFile(response, 'carros_classicos.json')
    } else if (parts.path == '/carros/esportivos'){
        readFile(response, 'carros_esportivos.json')
    } else if(parts.path, '/carros/luxo'){
        readFile(response, 'carros_luxo.json')
    } else {
        response.end('caminho não encontrado: ' + path);
    }
}

let server = http.createServer(callback);
server.listen(3000)
console.log('Server running at http://localhost:3000, servidor carros/tipos');