const express = require('express');
const router = express.Router();
const controller = require('../controllers/keywordMenuController');

router.get('/', controller.keywordMenu);
router.post('/', controller.keywordMenuProc);
router.get('/keywordResult', controller.keywordResult);

module.exports = router;