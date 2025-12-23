const common = require('../common/common');

const randomMenu = (req, res) => {
    try {
        res.render('randomMenu');
    } catch (error) {
        res.status(500).send('500 Error');
    }
};

const randomMenuhome = (req, res) => {
    try {
        res.render('index');
    } catch (error) {
        res.status(500).send('500 Error');
    }
};

module.exports = {
    randomMenu,
    randomMenuhome
};