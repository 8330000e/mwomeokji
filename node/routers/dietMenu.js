const express = require('express');
const router = express.Router();
const controller = require('../controllers/dietMenuController');

router.get('/diet', controller.diet);
router.get('/setting', controller.setting);
router.post('/diet', controller.diethome);
router.post('/setting', controller.settinghome);


module.exports = router;