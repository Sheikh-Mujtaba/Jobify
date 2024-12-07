const { db } = require('../config/db');

exports.getAllVacancies = (req, res) => {
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
      return res.status(500).json({ message: 'Error fetching vacancies', error: err.message });
    }

    res.json(results);
  });
};

exports.getVacancyById = (req, res) => {
  const vacancyId = req.params.id;
  const sql = 'SELECT * FROM vacancies WHERE id = ?';

  db.query(sql, [vacancyId], (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error fetching vacancy details', error: err.message });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: 'Vacancy not found' });
    }

    res.json(results[0]);
  });
};
