const { dbSignup } = require('../config/db');
const bcrypt = require ('bcryptjs');


exports.registerController=(req,res) => {
  const sql = "INSERT INTO login (`email` , `name` , `password`) VALUES (?,?,?)";
  const {name , email , password} = req.body ;

  bcrypt.hash (password , 10 , (err , hashedPassword) =>{ 
    if (err) {
      return res.status(500).json ({message : 'ERROR HASHING'})
    }
    dbSignup.query(sql , [name,email,hashedPassword] , (err , data ) => {
      if (err) {
        return res.status(500).json ({message: "Invalid server"})
      }
      if (data.length === 0) {
        return res.status(401).json ({message : "Enter details"})
      }
      return res.status(200).json( {message : "Registered"})
    })
  })

  
}

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

exports.logoutController = (req, res) => {
  req.session.destroy((err) => {
      if (err) {
          console.error('Error destroying session:', err);
          return res.status(500).json({ message: 'Error logging out' }); 
      }
      res.clearCookie('connect.sid'); // Replace 'connect.sid' if you've named your cookie differently
      return res.status(200).json({ message: 'Logged out successfully' });
  });
};
