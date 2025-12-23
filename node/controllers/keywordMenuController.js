const common = require('../common/common');
const model = require('../models/keywordMenuModel');

const keywordMenu = (req, res) => {
    try {
        res.render('keywordMenu');
    } catch (error) {
        res.status(500).send('500 Error');
    }
};

const keywordMenuProc = async(req, res) => {
    try {
        let { userKeyword = '' } = req.body;
        const keywords = userKeyword
            .split(/\r?\n| +/)
            .map(s => s.trim())
            .filter(Boolean);
        console.log('Received keywords:', keywords);

        const results = await model.keywordRec(keywords);
        console.log('keywordRec returned rows:', Array.isArray(results) ? results.length : results);

        // 화면에는 최대 4개만 표시
        const shown = Array.isArray(results) ? results.slice(0, 4) : [];
        res.render('keywordResult', { results: shown });
    } catch (error) {
        console.error('keywordMenuProc error:', error);
        res.status(500).send('500 Error');
    }
};

const keywordResult = (req, res) => {
    try {
        res.render('keywordResult');
    } catch (error) {
        res.status(500).send('500 Error');
    }
};

module.exports = {
    keywordMenu,
    keywordMenuProc,
    keywordResult
};