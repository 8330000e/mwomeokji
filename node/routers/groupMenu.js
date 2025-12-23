const express = require('express');
const router = express.Router();
const controller = require('../controllers/groupMenuController');

router.get('/groupMenu', controller.groupMenu);
router.post('/groupMenu', controller.groupMenuhome);


module.exports = router;