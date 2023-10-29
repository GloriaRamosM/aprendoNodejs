const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/plain",
  });

  res.end(" Hola mundo, te saludo desde la terminal");
});

server.listen(4500, () =>
  console.log("Servidor corriendo en puerto 4500, http://localhost:4500")
);
