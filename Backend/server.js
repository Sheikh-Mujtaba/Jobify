const mysql = require('mysql');
const express = require('express');
const app = express();
const cors = require('cors')

app.use(cors());
// Create MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',  // Set your password if any
  database: 'jobs',  // Make sure your 'jobs' database exists
});


app.get ('/vacancies' , (req,res) => {
  const sql = `
  SELECT 
    vacancies.id,
    vacancies.title,
    vacancies.description,
    vacancies.salary,
    categories.name AS category_name
  FROM 
    vacancies
  JOIN 
    categories ON vacancies.category_id = categories.id
`;


db.query(sql, (err, results) => {
  if (err) {
    console.error('Error fetching categories:', err);
    return res.status(500).json({ message: 'Error fetching categories' });
  }

  if (results.length === 0) {
    console.log('No categories found');
    return res.status(404).json({ message: 'No categories found' });
  }

  res.json(results);  // Send the categories back to the React frontend
});

})

app.get('/vacancies/:id', (req, res) => {
  const vacancyId = req.params.id;
  const sql = "SELECT * FROM vacancies WHERE id = ?";

  db.query(sql, [vacancyId], (err, results) => {
    if (err) {
      console.error('Error fetching vacancy details:', err);  // Log the actual error
      return res.status(500).json({ message: 'Error fetching vacancy details', error: err.message });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: 'Vacancy not found' });
    }

    res.json(results[0]);  // Respond with the first result
  });
});


app.get('/apply/:id', (req, res) => {
  const applyId = req.params.id;
  const sql = "SELECT * FROM vacancies WHERE id = ?";

  db.query(sql, [applyId], (err, results) => {
    if (err) {
      console.error('Error fetching vacancy details:', err);  // Log the actual error
      return res.status(500).json({ message: 'Error fetching vacancy details', error: err.message });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: 'Vacancy not found' });
    }

    res.json(results[0]);  // Respond with the first result
  });
});



// Connect to MySQL
app.get('/categories', (req, res) => {
  const sql = `SELECT id, name FROM categories`;

  // Query the database to get categories
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching categories:', err);
      return res.status(500).json({ message: 'Error fetching categories' });
    }

    if (results.length === 0) {
      console.log('No categories found');
      return res.status(404).json({ message: 'No categories found' });
    }

    res.json(results);  // Send the categories back to the React frontend
  });
});


// Start the server on a specified port
app.listen(8081, () => {
  console.log('Server running on http://localhost:8081');
});
