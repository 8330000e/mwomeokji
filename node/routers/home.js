const express = require('express');
const router = express.Router();
const controller = require('../controllers/homeController');

router.get('first', controller.first);
router.get('/', controller.home);

router.get('/keywordMenu', controller.keywordMenu);
router.get('/randomMenu', controller.randomMenu);
router.get('/groupMenu', controller.groupMenu);
router.get('/dietMenu/diet', controller.diet);

module.exports = router;