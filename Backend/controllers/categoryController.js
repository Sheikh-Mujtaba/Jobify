const { db } = require('../config/db');

exports.getAllCategories = (req, res) => {
  const sql = 'SELECT id, name FROM categories';

  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error fetching categories', error: err.message });
    }

    res.json(results);
  });
};
