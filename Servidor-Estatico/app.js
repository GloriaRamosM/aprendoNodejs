// COMENTARODIGO CONTOL + K + C .. DESCOMENTAR CONTOL + K + U

// PRIMER EJEMPLO : SERVIDOR ESTATICO CON UNA PAGINA Y TEXTO SIMPLE
// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.writeHead(200, {
//     "Content-Type": "text/plain",
//   });

//   res.end(" Hola mundo, te saludo desde la terminal");
// });

// server.listen(4500, () =>
//   console.log("Servidor corriendo en puerto 4500, http://localhost:4500")
// );

// SEGUNDO EJEMPLO: SERVIDOR ESTATICO CON UN TEXTO COMO HTML. CAMBIA EL CONTENT Y EL END

//

// TERCER EJEMPLO : SERVDOR ESTATICO PERO LEVANTANDO EL ARCHIVO DE INDEX HTML

const http = require("http");
const fs = require("fs");
const { __dirname } = require("path");

const server = http.createServer((req, res) => {
  const file = fs.readFileSync(__dirname + "/index.html");
  //console.log(__dirname) por si necesito ver que esta haciendo

  res.writeHead(200, {
    "content-type": "text/html; charset=utf-8",
  });

  res.end(file);
});

server.listen(4500, () =>
  console.log(
    " Este servido esta corriendo en puerto 4500, http://localhost:4500"
  )
);
