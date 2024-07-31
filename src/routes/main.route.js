const express = require('express');
const router = express.Router();

const resumeController = require('../controllers/resume.controller');
const pageController = require('../controllers/page.controller');


router.get('/resume', resumeController.get);
router.get('/*',pageController.get)

router.post('/resume', resumeController.post)

module.exports = router;