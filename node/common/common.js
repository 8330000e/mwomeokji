const xss = require('xss');
const path = require('path');
const fs = require('fs');

const checkLogin = (req, res, isMust = true) => {
    let loginUserInfo = req.session.user;

    if(loginUserInfo == null) {
        if(isMust) {
            alertAndGo(res, "로그인이 필요합니다.", "/login/view");
        }
        return null;
    }

    return loginUserInfo;
};

const alertAndGo = (res, msg, url) =>{
    res.render('common/alert', {msg, url});
}

const isNumber = (n) => {
    return /^-?[\d.]+(?:e-?\d+)?$/.test(n);
};

const reqeustFilter = (data, type, isHtml, defaultvalue = null) => {
    // data가 null이거나 빈 문자열인 경우 먼저 처리
    if (data == null || data == '') {
        if (defaultvalue != null) {
            data = defaultvalue;
        } else {
            throw "input parameter not allow null";
        }
    }

    switch (type) {
        case 0:
            if (data != undefined) {
                let checkVal = data.replaceAll(',', '');
                if (!isNumber(checkVal)) {
                    throw "parameter is not number Error";
                }
            }
            break;
        case -1:
            if (!isHtml) {
                data = xss(data);
            }
            break;
        default:
            if (data && data.length && type < data.length) {
                throw "input length is too long";
            }
            
            if (!isHtml) {
                data = xss(data);
            }
            break;
    }

    if (data == null || data == '') {
        if (defaultvalue != null) {
            data = defaultvalue;
        } else {
            throw "input parameter not allow null";
        }
    }

    return data;
};



module.exports = {
    checkLogin,
    alertAndGo,
    reqeustFilter
}