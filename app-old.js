import http from "http";

http
  .createServer((req, res) => {
    // res.writeHead(200, { "Content-Type": "application/json" });
    // res.setHeader("Content-Disposition", "attachment; filename=lista.csv");
    // res.writeHead(200, { "Content-Type": "application/csv" });

    // const persona = {
    //   id: 1,
    //   nombre: "Emilio",
    // };

    // res.write("id, nombre\n");
    // res.write("1, Emilio\n");
    // res.write("2, Jose\n");
    // res.write("3, Pancho\n");
    // res.write("4, Maria\n");
    res.write("Hola Mundo");
    res.end();
  })
  .listen(8080);

console.log("Escuchando el puerto ", 8080);
