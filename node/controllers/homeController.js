// const common = require('../common/common');

const e = require("express");

const first = (req, res) => {
    try {   
        const loginUserInfo = common.checkLogin(req, res);

        if (loginUserInfo != null) {
            res.render('index', {loginUserInfo});
        } else {
            res.render('first');
        }
    } catch (error) {
        res.status(500).send("500 Error");
    }

}

const home = (req, res) => {
    try {
        let loginUserInfo = common.checkLogin(req, res);
        if(loginUserInfo != null) {
            console.log(loginUserInfo);
            res.render('index', {loginUserInfo});
        } else {
            res.render('login/view');
        }
        // res.render('index');
    } catch (error) {
        res.status(500).send('500 Error');
    }
};

const keywordMenu = (req, res) => {
    try {
        res.render('keywordMenu');
    } catch (error) {
        res.status(500).send('500 Error');
    }
};

const randomMenu = (req, res) => {
    try {
        res.render('randomMenu');
    } catch (error) {
        res.status(500).send('500 Error');
    }
};  

const groupMenu = (req, res) => {
    try {
        res.render('groupMenu');
    } catch (error) {
        res.status(500).send('500 Error');
    }
};  

const diet = (req, res) => {
    try {
        res.render('dietMenu/diet');
    } catch (error) {
        res.status(500).send('500 Error');
    }
};  

module.exports = {
    first,
    home,
    keywordMenu,
    randomMenu,
    groupMenu,
    diet
};