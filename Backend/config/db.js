const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Set your password if any
  database: 'jobs',
});

const dbSignup = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Set your password if any
  database: 'signup',
});

module.exports = { db, dbSignup };
