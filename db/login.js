//
// const sequelize = require('sequelize');
const mysql = require('mysql2');

// Connection
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'nve2-98547yhgvfbnqp',
      database: 'cxlos_db'
    },
    console.log(`Connected to the books_db database.`)
  );

module.exports = db

// const Sequelize = require('sequelize');
// require('dotenv').config();

// const sequelize = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PASSWORD,
//   {
//     host: 'localhost',
//     dialect: 'mysql',
//     port: 3306,
//   }
// );

// module.exports = sequelize;
