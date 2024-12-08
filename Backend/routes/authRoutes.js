const express = require('express');
const { login , checkSessionController ,registerController ,logoutController} = require('../controllers/authController');
const router = express.Router();

router.post('/login', login);
router.post('/logout', logoutController);

router.post ('/register' , registerController);
router.get('/check-session', checkSessionController);



module.exports = router;
