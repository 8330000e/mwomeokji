const express = require('express');
const router = express.Router();
// const passport = require('passport');
const controller = require('../controllers/loginController');

router.get('/view', controller.loginview);
router.get('/login', controller.login);
router.post('/login', controller.loginProc);

// passport 미들웨어가 바로 구글로 리다이렉트
// router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// 콜백: passport.authenticate의 (err, user, info)를 받아 controller.googleCall로 위임
// router.get('/google/callback', (req, res, next) => {
//     passport.authenticate('google', (err, user, info) => {
//         if (err) return next(err);
//         return controller.googleCall(user, info, req, res, next);
//     })(req, res, next);
// });

// google, callback 라우트의 passport 코드를 controller으로 넘길 경우 인증 흐름이 잘못 동작할 수 있음

// router.get('/join/google', controller.joinGoogleForm);
// router.post('/join/google', controller.joinGoogleProc);

module.exports = router;