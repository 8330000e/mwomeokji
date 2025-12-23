const common = require('../common/common');

const signup = ((req, res) => {
    try {
        res.render('signup');
    } catch (error) {
        res.status(500).send('500 Error');
    }
});

const info = ((req, res) => {
    try {
        res.render('signup/step1/info');
    } catch (error) {
        res.status(500).send('500 Error');
    }
});

const health = ((req, res) => {
    try {
        res.render('signup/step1/health');
    } catch (error) {
        res.status(500).send('500 Error');
    }
}); 

const activity = ((req, res) => {
    try {
        res.render('signup/step2/activity');
    } catch (error) {
        res.status(500).send('500 Error');
    }
}); 

const onetime = ((req, res) => {
    try {
        res.render('signup/step2/onetime');
    } catch (error) {
        res.status(500).send('500 Error');
    }
}); 

const strength = ((req, res) => {
    try {
        res.render('signup/step2/strength');
    } catch (error) {
        res.status(500).send('500 Error');
    }
}); 

const type = ((req, res) => {
    try {
        res.render('signup/step3/type');
    } catch (error) {
        res.status(500).send('500 Error');
    }
}); 

const others = ((req, res) => {
    try {
        res.render('signup/step3/others');
    } catch (error) {
        res.status(500).send('500 Error');
    }
});     

const pattern = ((req, res) => {
    try {
        res.render('signup/step3/pattern');
    } catch (error) {
        res.status(500).send('500 Error');
    }
}); 

const foraweek = ((req, res) => {
    try {
        res.render('signup/step4/foraweek');
    } catch (error) {
        res.status(500).send('500 Error');
    }
}); 

const preference = ((req, res) => {
    try {
        res.render('signup/step4/preference');   
    } catch (error) {
        res.status(500).send('500 Error');
    }
});

const wostfood = ((req, res) => {
    try {
        res.render('signup/step4/wostfood');
    } catch (error) {
        res.status(500).send('500 Error');
    }
});

const foodcategory = ((req, res) => {
    try {
        res.render('signup/step4/foodcategory');
    } catch (error) {
        res.status(500).send('500 Error');
    }
}); 

const completion = ((req, res) => {
    try {
        res.render('signup/completion');       
    } catch (error) {
        res.status(500).send('500 Error');
    }
});

const infoProc = ((req, res) => {
    try {
        let {name, age, gender, height, weight} = req.body;
        res.render('signup/step1/health', {name, age, gender, height, weight}); // 다음 단계로 이동
    } catch (error) {
        res.status(500).send('500 Error');
    }
});

const healthProc = ((req, res) => {
    try {
        let {name, age, gender, height, weight, disease, allergy} = req.body;
        res.redirect('signup/step2/activity', {name, age, gender, height, weight, disease, allergy}); // 다음 단계로 이동
    } catch (error) {
        res.status(500).send('500 Error');
    }
}); 

const activitypeoc = ((req, res) => {
    try {
        res.redirect('signup/step2/onetime'); // 다음 단계로 이동
    } catch (error) {
        res.status(500).send('500 Error');
    }
}); 

const onetimeProc = ((req, res) => {
    try {
        res.redirect('signup/step2/strength'); // 다음 단계로 이동
    } catch (error) {
        res.status(500).send('500 Error');
    }
}); 

const strengthProc = ((req, res) => {
    try {
        res.redirect('signup/step3/type'); // 다음 단계로 이동
    } catch (error) {
        res.status(500).send('500 Error');
    }
}); 

const typeProc = ((req, res) => {
    try {
        res.redirect('signup/step3/pattern'); // 다음 단계로 이동
    } catch (error) {
        res.status(500).send('500 Error');
    }
}); 

const patternProc = ((req, res) => {
    try {
        res.redirect('signup/step3/others'); // 다음 단계로 이동
    } catch (error) {
        res.status(500).send('500 Error');
    }
}); 

const othersProc = ((req, res) => {
    try {
        res.redirect('signup/step4/foraweek'); // 다음 단계로 이동
    } catch (error) {
        res.status(500).send('500 Error');
    }
});     

const foraweekProc = ((req, res) => {
    try {
        res.redirect('signup/step4/preference'); // 다음 단계로 이동
    } catch (error) {
        res.status(500).send('500 Error');
    }
}); 

const preferenceProc = ((req, res) => {
    try {
        res.redirect('signup/step4/wostfood'); // 다음 단계로 이동
    } catch (error) {
        res.status(500).send('500 Error');
    }
});

const wostfoodProc = ((req, res) => {
    try {
        res.redirect('signup/step4/foodcategory'); // 다음 단계로 이동
    } catch (error) {
        res.status(500).send('500 Error');
    }
});

const foodcategoryProc = ((req, res) => {
    try {
        res.redirect('signup/completion'); // 완료 페이지로 이동
    } catch (error) {
        res.status(500).send('500 Error');
    }
});

const completionProc = ((req, res) => {
    try {
        res.redirect('/'); // 홈으로 이동
    } catch (error) {
        res.status(500).send('500 Error');
    }
});


module.exports = {
    signup,
    info,
    health,
    activity,
    onetime,
    strength,
    type,
    others,
    pattern,
    foraweek,
    preference,
    wostfood,
    foodcategory,
    completion,
    infoProc,
    healthProc,
    activitypeoc,
    onetimeProc,
    strengthProc,
    typeProc,
    othersProc,
    patternProc,
    foraweekProc,
    preferenceProc,
    wostfoodProc,
    foodcategoryProc,
    completionProc
}