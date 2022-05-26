const http = require("http");

http.createServer((req, res) => {
    console.log("Servidor rodando...")
}).listen(3000, "localhost");