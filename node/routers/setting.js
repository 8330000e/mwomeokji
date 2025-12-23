const express = require('express');
const router = express.Router();
const controller = require('../controllers/settingController');

router.get('/menu', controller.menu);

router.get('/infoModify', controller.infoModify);
router.post('/infoModify', controller.infoModifyProc);
router.get('/healthModify', controller.healthModify);
router.post('/healthModify', controller.healthModifyProc);
router.get('/preferModify', controller.preferModify);
router.post('/preferModify', controller.preferModifyProc);
router.get('/tastedataModify', controller.tastedataModify);
router.post('/tastedataModify', controller.tastedataModifyProc);
router.get('/tastedataShare', controller.tastedataShare);
router.post('/tastedataShare', controller.tastedataShareProc);

router.get('/alarmSetting', controller.alarmSetting);
router.post('/alarmSetting', controller.alarmSettingProc);
router.get('/appsetting', controller.appsetting);
router.post('/appsetting', controller.appsettingProc);

router.get('/notice', controller.notice);
router.post('/notice', controller.noticeProc);
router.get('/feedback', controller.feedback);
router.post('/feedback', controller.feedbackProc);

router.get('/logout', controller.logout);

router.get('/user_leave', controller.user_leave);
router.post('/user_leave', controller.user_leaveProc);


module.exports = router;