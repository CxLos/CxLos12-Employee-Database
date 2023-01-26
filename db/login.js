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