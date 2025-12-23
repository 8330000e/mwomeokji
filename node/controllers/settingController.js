const common = require('../common/common');

const menu = ((req, res) => {
    try {
        res.render('setting/menu');
    } catch (error) {
        res.status(500).send('500 Error');
    }
});

const infoModify = ((req, res) => {
    try {
        res.render('setting/infoModify');
    } catch (error) {
        res.status(500).send('500 Error');
    }
});

const healthModify = ((req, res) => {
    try {
        res.render('setting/healthModify');
    } catch (error) {
        res.status(500).send('500 Error');
    }
});   

const preferModify = ((req, res) => {
    try {
        res.render('setting/preferModify'); 
    } catch (error) {
        res.status(500).send('500 Error');
    }
});

const tastedataModify = ((req, res) => {
    try {
        res.render('setting/tastedataModify');
    } catch (error) {
        res.status(500).send('500 Error');
    }
});

const tastedataShare = ((req, res) => {
    try {
        res.render('setting/tastedataShare');
    } catch (error) {
        res.status(500).send('500 Error');
    }
});

const alarmSetting = ((req, res) => {
    try {
        res.render('setting/alarmSetting');
    } catch (error) {
        res.status(500).send('500 Error');
    }
});

const appsetting = ((req, res) => {
    try {
        res.render('setting/appsetting');
    } catch (error) {
        res.status(500).send('500 Error');
    }
});

const notice = ((req, res) => {
    try {
        res.render('setting/notice');
    } catch (error) {
        res.status(500).send('500 Error');
    }
}); 

const feedback = ((req, res) => {
    try {
        res.render('setting/feedback');
    } catch (error) {
        res.status(500).send('500 Error');
    }
});

const logout = ((req, res) => {
    try {
        res.render('login/view');
    } catch (error) {
        res.status(500).send('500 Error');
    }
}); 

const user_leave = ((req, res) => {
    try {
        res.render('login/view');   
    } catch (error) {
        res.status(500).send('500 Error');
    }
});

const infoModifyProc = ((req, res) => {
    try {
        res.redirect('/setting/menu');
    } catch (error) {
        res.status(500).send('500 Error');
    }
}); 

const healthModifyProc = ((req, res) => {
    try {
        res.redirect('/setting/menu');
    } catch (error) {
        res.status(500).send('500 Error');
    }
}); 

const preferModifyProc = ((req, res) => {
    try {
        res.redirect('/setting/menu');
    } catch (error) {
        res.status(500).send('500 Error');
    }
});     

const tastedataModifyProc = ((req, res) => {
    try {
        res.redirect('/setting/menu');
    } catch (error) {
        res.status(500).send('500 Error');
    }
});

const tastedataShareProc = ((req, res) => {
    try {
        res.redirect('/setting/menu');
    } catch (error) {
        res.status(500).send('500 Error');
    }
});     

const alarmSettingProc = ((req, res) => {
    try {
        res.redirect('/setting/menu');
    } catch (error) {
        res.status(500).send('500 Error');
    }
}); 

const appsettingProc = ((req, res) => {
    try {
        res.redirect('/setting/menu');
    } catch (error) {
        res.status(500).send('500 Error');
    }
}); 

const noticeProc = ((req, res) => {
    try {
        res.redirect('/setting/menu');
    } catch (error) {
        res.status(500).send('500 Error');
    }
});     

const feedbackProc = ((req, res) => {
    try {
        res.redirect('/setting/menu');
    } catch (error) {
        res.status(500).send('500 Error');
    }
});     

const logoutProc = ((req, res) => {
    try {
        res.redirect('/login/view');
    } catch (error) {
        res.status(500).send('500 Error');
    }
});     

const user_leaveProc = ((req, res) => {
    try {
        res.redirect('/login/view');
    } catch (error) {
        res.status(500).send('500 Error');
    }
});     

module.exports = {
    menu,
    infoModify,
    healthModify,
    preferModify,
    tastedataModify,
    tastedataShare,
    alarmSetting,
    appsetting,
    notice,
    feedback,
    logout,
    user_leave,
    infoModifyProc,
    healthModifyProc,
    preferModifyProc,
    tastedataModifyProc,
    tastedataShareProc,
    alarmSettingProc,
    appsettingProc,
    noticeProc,
    feedbackProc,
    logoutProc,
    user_leaveProc
}
