const common = require('../common/common');

const groupMenu = (req, res) => {
    try {
        res.render('groupMenu');
    } catch (error) {
        res.status(500).send('500 Error');
    }
};

const groupMenuhome = (req, res) => {
    try {
        res.render('index');
    } catch (error) {
        res.status(500).send('500 Error');
    }
};

module.exports = {
    groupMenu,
    groupMenuhome
};