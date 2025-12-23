// const bcrypt = require('bcryptjs');
const common = require('../common/common');
const model = require('../models/userModel');
// const { User } = model;


const loginview = (req, res) => {
    try {
        res.render('login/view');
    } catch (error) {
        res.status(500).send('500 Error');
    }
};

const login = (req, res) => {
    try {
        res.render('login/login');
    } catch (error) {
        res.status(500).send('500 Error');
    }
};

const loginProc = async (req, res) => {
    try {
        let {uemail, upw_hash} = req.body; 
        console.log('로그인 시도:', { uemail, upw_hash });

        // xss 필터링 - 빈 값은 빈 문자열로 기본값 설정
        uemail = common.reqeustFilter(uemail, 50, false, '');
        upw_hash = common.reqeustFilter(upw_hash, 50, false, '');
        
        // 이메일이나 비밀번호가 비어있으면 로그인 페이지로
        if (!uemail || !upw_hash) {
            console.log('이메일 또는 비밀번호 비어있음');
            return res.render('login/login');
        }
        
        const result = await model.loginCheck(uemail, upw_hash);
        console.log('DB 조회 결과:', result);

        if(result != null){
            console.log('로그인 성공!');
            //로그인 처리 --> 세션 저장
            req.session.user = { 
                id: result.id,
                user_email: result.uemail,
                name: result.uname
            }
            res.redirect('/');

        } else{
            console.log('로그인 실패 - DB에 해당 사용자 없음');
            res.render('login/login'); 
        
        }
    } catch(error) {
        console.error('로그인 에러:', error);
        res.status(500).send("500 Error: " + error);
    }
};


// 구글 로그인 요청 (뷰만 렌더, passport 인증은 라우터가 처리)
const google = (req, res) => {
    try {
        // views/login/view.html 안에 <a href="/login/google">구글로 로그인</a> 같은 링크/버튼을 두어야함
        return res.render('login/google');
    } catch (error) {
        return res.status(500).send('500 Error');
    }
};

// 구글 로그인 콜백 처리 (passport custom callback에서 호출)
const googleCall = async (user, info, req, res, next) => {
    try {
        if (!user) {
            const msg = (info && info.message) ? info.message : 'Google 로그인 실패';

            if (msg === 'NO_SIGNUP') {
                // 가입 페이지로 이동 (세션에 저장된 req.session.oauthProfile 사용)
                return res.redirect('/login/join/google');
            }
            if (msg === 'EMAIL_REGISTERED') {
                // 이메일로 이미 가입된 경우 — 안내 후 로그인 페이지로
                return common.alertAndGo(res, '이미 이메일로 가입된 계정이 있습니다. 로그인 후 계정 연동을 시도하세요.', '/login/view');
            }
            return common.alertAndGo(res, msg, '/login/view');
        }

        // user가 있으면 로그인 처리
        req.logIn(user, (err) => {
            if (err) return next(err);
            req.session.user = {
                pkid: user.pkid || user._id || user.id,
                user_id: user.user_id || user.email || user.id,
                name: user.name || user.displayName || ''
            };
            return common.alertAndGo(res, '로그인 성공', '/');
        });
    } catch (error) {
        return next(error);
    }
};

const joinGoogleForm = (req, res) => {
    const oauth = req.session.oauthProfile || {};
    return res.render('login/join', { oauth }); // 뷰에서 email/name 미리 채움
};

const joinGoogleProc = async (req, res, next) => {
    try {
        const oauth = req.session.oauthProfile;
        if (!oauth) return common.alertAndGo(res, '세션이 만료되었습니다. 다시 시도하세요.', '/login/view');

        const { username, password, birthday, nickname } = req.body;

        // 최소 검증: 이메일/username 중복
        const existing = await User.findOne({ $or: [{ email: oauth.email }, { nickname }, { name: username }] });
        if (existing) return common.alertAndGo(res, '이미 존재하는 정보가 있습니다.', '/login/view');

        // 비밀번호가 입력되면 해시 (소셜 가입에서 비밀번호 선택 허용)
        let hash = undefined;
        if (password && password.length >= 6) {
            const salt = await bcrypt.genSalt(10);
            hash = await bcrypt.hash(password, salt);
        }

        const newUser = new User({
            name: username || oauth.name,
            email: oauth.email,
            password: hash,
            birthday: birthday ? new Date(birthday) : undefined,
            nickname,
            socialId: oauth.socialId,
            provider: oauth.provider
        });

        await newUser.save();
        // 세션 정리 및 자동 로그인
        delete req.session.oauthProfile;
        req.logIn(newUser, (err) => {
            if (err) return next(err);
            req.session.user = { pkid: newUser._id, user_id: newUser.email, name: newUser.name };
            return common.alertAndGo(res, '회원가입 및 로그인 완료', '/');
        });
    } catch (err) {
        return next(err);
    }
};


module.exports = {
    loginview,
    login,
    loginProc,
    google,
    googleCall,
    joinGoogleForm,
    joinGoogleProc
}

