const util = require("util");
const mysql = require("mysql");

const pool = mysql.createPool({
  connection: 10,
  host: process.env.HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
});

pool.getConnection((err, connection) => {
  if (err) console.log("Algo ocurrió mal");
  if (connection) connection.release();
  return;
});

pool.query = util.promisify(pool.query);

module.exports = pool;