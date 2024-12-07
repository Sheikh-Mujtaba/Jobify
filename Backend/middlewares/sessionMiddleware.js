const session = require('express-session');

const sessionMiddleware = session({
  secret: '7372',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }, // Set to `true` for HTTPS in production
});

module.exports = sessionMiddleware;
