import express from "express";
import hbs from "hbs";
import * as url from "url";
import "dotenv/config";

const app = express();
const port = process.env.PORT;

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

// Handlebars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials", function (err) {
  console.log(err);
});

//Servir contenido estatico
app.use(express.static("public"));

// app.get("/", (req, res) => {
//   res.send("Home page");
// });

app.get("/", (req, res) => {
  res.render("home", {
    nombre: "Emilio Ibarra",
    titulo: "Curso de Node",
  });
});

app.get("/elements", (req, res) => {
  res.render("elements", {
    nombre: "Emilio Ibarra",
    titulo: "Curso de Node",
  });
});

app.get("/generic", (req, res) => {
  res.render("generic", {
    nombre: "Emilio Ibarra",
    titulo: "Curso de Node",
  });
});

app.get("/hola-mundo", (req, res) => {
  res.send("Hola mundo desde su ruta");
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(port, () => {
  console.log(`Ejemplo corriendo en http://localhost:${port}`);
});
