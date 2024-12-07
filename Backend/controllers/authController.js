const { dbSignup } = require('../config/db');

exports.login = (req, res) => {
  const sql = 'SELECT * FROM login WHERE email = ? AND password = ?';
  const { email, password } = req.body;

  dbSignup.query(sql, [email, password], (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Server Error' });
    }
    if (data.length === 0) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    req.session.user = {
      id: data[0].id,
      email: data[0].email,
    };

    res.status(200).json({ message: 'Logged in' });
  });
};

exports.checkSessionController = (req, res) => {
  if (req.session && req.session.user) {
    return res.status(200).json({ 
      message: "Session exists", 
      user: req.session.user 
    });
  } else {
    return res.status(401).json({ message: "No session" });
  }
};