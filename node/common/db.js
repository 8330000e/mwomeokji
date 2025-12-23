const mysql = require('mysql2');

const db = {
    host : '127.0.0.1',
    user : 'user1',
    password : '12345',
    database : 'dbwte'
};

const pool = mysql.createPool(db);
const dbPool = pool.promise();

const runSql = (async(sql, params = null) => {
    let dbCon;
    let result;

    try {
        dbCon = await dbPool.getConnection();
        if(params == null) {
            result = await dbCon.query(sql);
        } else {
            result = await dbCon.query(sql, params);
        }

        return result[0];
    } catch(error) {
        throw new Error(error);
    } finally {
        if (dbCon) dbCon.release();
    }
});

module.exports = {
    runSql,
    db
}