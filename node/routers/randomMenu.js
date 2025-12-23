const express = require('express');
const router = express.Router();
const controller = require('../controllers/randomMenuController');

router.get('/', controller.randomMenu);
router.post('/', controller.randomMenuhome);


module.exports = router;