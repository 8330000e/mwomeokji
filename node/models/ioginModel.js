const mongoose = require('mongoose');
const db = require('../common/db');

const loginCheck = async(uemail, upw_hash) => {
    try {
        const sql = "select id, uemail, uname from users where uemail = ? and upw_hash = ?";
        const params = [uemail, upw_hash];

        const result = await db.runSql(sql, params);
        return result[0];
    } catch (error) {
        throw "sql error: " + error;
    }
}



// const userSchema = new mongoose.Schema({
//     // pkid: Number, // 필요하면 auto-increment 플러그인 사용
//     name: { type: String, required: true },
//     email: { type: String, required: true, unique: true, index: true },
//     password: { type: String }, // 소셜 가입은 비어있을 수 있음 (해시값)
//     birthday: { type: Date },
//     nickname: { type: String },
//     socialId: { type: String },
//     provider: { type: String }
// }, { timestamps: true });


module.exports = {
    loginCheck,
    // User: mongoose.model('User', userSchema)
}