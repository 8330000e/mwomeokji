const express = require('express');
const router = express.Router();
const controller = require('../controllers/signupController');

router.get('/step1/info', controller.info);
router.post('/step1/info', controller.infoProc);
router.get('/step1/health', controller.health);
router.post('/step1/health', controller.healthProc);

router.get('/step2/activity', controller.activity);
router.post('/step2/activity', controller.activitypeoc);
router.get('/step2/onetime', controller.onetime);
router.post('/step2/onetime', controller.onetimeProc);
router.get('/step2/strength', controller.strength);
router.post('/step2/strength', controller.strengthProc);

router.get('/step3/type', controller.type);
router.post('/step3/type', controller.typeProc);
router.get('/step3/others', controller.others);
router.post('/step3/others', controller.othersProc);
router.get('/step3/pattern', controller.pattern);
router.post('/step3/pattern', controller.patternProc);

router.get('/step4/foraweek', controller.foraweek);
router.post('/step4/foraweek', controller.foraweekProc);
router.get('/step4/preference', controller.preference);
router.post('/step4/preference', controller.preferenceProc);
router.get('/step4/wostfood', controller.wostfood);
router.post('/step4/wostfood', controller.wostfoodProc);
router.get('/step4/foodcategory', controller.foodcategory);
router.post('/step4/foodcategory', controller.foodcategoryProc);

router.get('/completion', controller.completion);
router.post('/completion', controller.completionProc);


module.exports = router;