const express = require("express");
const nunjucks = require("nunjucks");
const dotenv = require('dotenv');
dotenv.config();

const common = require('./common/common');
const session = require('express-session');
// const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const userModel = require("./models/userModel");
// const User = userModel.User;

const app = express();    // express가 was임
app.set('view engine', 'html');  // view engine은 html을 쓸거

// View Engine 설정
nunjucks.configure('views', {
    express: app,
    watch: true,    // html 바뀌면 재시작 안해줘도 웹브라우저에서 새로고침하면 바로 바뀜
    noCache: true   // 캐시 비활성화
})

// post 데이터 받기
app.use(express.urlencoded({
    extended: true
}));

//view 단에서 common 함수 사용할때 index.html의 페이지번호!!! 거기에 씀. 이걸꺼야 뷰에서 사용가능
app.locals.common = common;

// 정적파일 설정
app.use('/assets', express.static( __dirname + '/views/assets'));

//Session 사용 설정
// 아래 구문이 오류나서 임시로 주석 처리함!!
// const sessionfile = require('session-file-store')(session);
// const sessionDB = require('express-mysql-session')(session);
// const db = require('./common/db');

// app.use(passport.initialize());
// app.use(passport.session());

//Routing
const indexRouter = require('./routers/home');
const firstRouter = require('./routers/home')
const loginRouter = require('./routers/login');
const keywordmenuRouter = require('./routers/keywordMenu');
const randommenuRouter = require('./routers/randomMenu');
const groupmenuRouter = require('./routers/groupMenu');
const dietmenuRouter = require('./routers/dietMenu');
const settingRouter = require('./routers/setting');
const signupRouter = require('./routers/signup');

app.use('/', indexRouter);
app.use('/first', firstRouter);
app.use('/login', loginRouter);
app.use('/keywordMenu', keywordmenuRouter);
app.use('/randomMenu', randommenuRouter);
app.use('/groupMenu', groupmenuRouter);
app.use('/dietMenu', dietmenuRouter);
app.use('/setting', settingRouter);
app.use('/signup', signupRouter);


// // 유저 직렬화 (세션 저장)
// passport.serializeUser((user, done) => {
//   done(null, user);
// });

// // 유저 역직렬화 (세션에서 복원)
// passport.deserializeUser((obj, done) => {
//   done(null, obj);
// });


// 구글 로그인 전략 설정
// 임시로 비활성화 - Google OAuth 사용시 아래 주석 해제하고 .env에 클라이언트 ID, SECRET 설정 필요
/*
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost/login/google/callback',
    passReqToCallback: true
},
async (req, accessToken, refreshToken, profile, done) => {
    try {
        const email = profile.emails && profile.emails[0] && profile.emails[0].value;

        const socialUser = await User.findOne({ socialId: profile.id, provider: 'google' });
        if (socialUser) return done(null, socialUser);

        if (email) {
            const existingByEmail = await User.findOne({ email });
            if (existingByEmail) {
                // 이메일로 이미 가입된 계정이 있을 때
                return done(null, false, { message: 'EMAIL_REGISTERED' });
            }
        }

        // 회원가입 이력이 없으면 프로필을 세션에 저장하고 NO_SIGNUP으로 처리
        req.session.oauthProfile = {
            provider: 'google',
            socialId: profile.id,
            email,
            name: profile.displayName,
            photos: profile.photos
        };
        return done(null, false, { message: 'NO_SIGNUP' });

    } catch (err) {
        return done(err);
    }
}));
*/


//404 Not found 
app.use((req, res)=>{ 
    res.status(404).send('404 오류');
});

const PORT = 3000;
app.listen(
    PORT, () => {
        console.log(PORT, '번에서 express 동작 중');
    }
);