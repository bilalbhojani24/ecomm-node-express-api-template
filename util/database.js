// method : 1 => mysql pool
// const mysql = require("mysql2");

// const pool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   database: "node-complete",
//   password: "m1nda@FW",
// });

// module.exports = pool.promise();

// method : 2 = With sequelize

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "m1nda@FW", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
