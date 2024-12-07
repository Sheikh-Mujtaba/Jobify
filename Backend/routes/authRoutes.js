const express = require('express');
const { login , checkSessionController} = require('../controllers/authController');
const router = express.Router();

router.post('/login', login);
router.get('/check-session', checkSessionController);



module.exports = router;
