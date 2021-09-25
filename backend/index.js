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
//roles
app.use("/api/roles", require("./routes/roles"));

//departamento
app.use("/api/departamentos", require("./routes/departamentos"));

//pais
app.use("/api/paises", require("./routes/paises"));

//ciudad
app.use("/api/ciudad", require("./routes/ciudad"));

//port
const port = process.env.PORT;

//listen.port
app.listen(port, () => {
  console.log(`Aplicacion de MYSQL corriendo ${port}`);
});
