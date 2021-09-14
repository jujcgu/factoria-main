const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

//middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cors());
require("dotenv").config();

//routes
/* app.get("/api/test", (req, res) => {
  res.json({ message: "Funciona soccer" });
}); */
app.use("/api/departamentos", require("./routes/departamentos"));

//port
const port = process.env.PORT;

//listen.port
app.listen(port, () => {
  console.log(`Aplicacion de MYSQL corriendo ${port}`);
});
