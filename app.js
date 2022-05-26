const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type":"text/plain"});

        switch(req.url){
            case "/":
                res.end("Você está na página HOME!");
                break;
            case "/contato":
                res.end("Você está na página CONTATO!");
                break;
            default:
                res.end("Você está no nosso servidor");
                break;
        }

}).listen(3030);