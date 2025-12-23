const common = require('../common/common');

const diet = (req, res) => {
    try {
        res.render('dietMenu/diet');
    } catch (error) {
        res.status(500).send('500 Error');
    }
};

const setting = (req, res) => {
    try {
        res.render('dietMenu/setting');
    } catch (error) {
        res.status(500).send('500 Error');
    }
};

const diethome = (req, res) => {
    try {
        res.render('index');
    } catch (error) {
        res.status(500).send('500 Error');
    }
};

const settinghome = (req, res) => {
    try {
        res.render('dietMenu/diet');
    } catch (error) {
        res.status(500).send('500 Error');
    }
};

module.exports = {
    diet,
    setting,
    diethome,
    settinghome
};