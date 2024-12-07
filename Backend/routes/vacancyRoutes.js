const express = require('express');
const { getAllVacancies, getVacancyById } = require('../controllers/vacancyController');
const router = express.Router();

router.get('/', getAllVacancies);
router.get('/:id', getVacancyById);

module.exports = router;
