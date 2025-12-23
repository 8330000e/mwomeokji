const db = require('../common/db');

/**
 * keywords: ['#양식', '#매콤', ...]
 * 반환: food_data 레코드 배열, 각 레코드에 match_count 프로퍼티 추가,
 *       match_count 높은 순으로 정렬되어 반환
 */
const keywordRec = async (keywords = []) => {
    try {
        if (!Array.isArray(keywords) || keywords.length === 0) {
            return [];
        }

        // 로그: 들어온 키워드 확인
        console.log('keywordRec called. keywords=', keywords);

        // 1) 우선 DB에서 LIKE로 집계하는 방법 (기존)
        const likes = keywords.map(k => `%${k}%`);
        const countExpr = keywords.map(() => 'CASE WHEN `keyword` LIKE ? THEN 1 ELSE 0 END').join(' + ');
        const whereClause = keywords.map(() => '`keyword` LIKE ?').join(' OR ');
        const sql = `
            SELECT *,
                   (${countExpr}) AS match_count
            FROM food_data
            WHERE (${whereClause})
            ORDER BY match_count DESC
        `;
        const params = [...likes, ...likes];

        // 로그: 쿼리와 파라미터
        console.log('SQL:', sql);
        console.log('PARAMS:', params);

        try {
            const rows = await db.runSql(sql, params);
            console.log('DB rows length:', rows && rows.length);
            if (Array.isArray(rows)) {
                return rows.map(r => ({ ...r, match_count: Number(r.match_count) || 0 }));
            }
        } catch (err) {
            console.error('keywordRec SQL error:', err);
            // 계속해서 fallback으로 처리
        }

        // 2) Fallback: 모든 항목을 가져와서 JS에서 매칭 카운트 계산 (더 안전)
        console.log('Running fallback matching in JS (fetch all rows).');
        const allRows = await db.runSql('SELECT * FROM food_data');
        if (!Array.isArray(allRows)) return [];

        const normalizedKeywords = keywords.map(k => k.toString().trim().toLowerCase());
        const results = allRows.map(row => {
            const text = (row.keyword || '').toString().toLowerCase();
            const match_count = normalizedKeywords.reduce((acc, kw) => acc + (text.includes(kw) ? 1 : 0), 0);
            return { ...row, match_count };
        }).filter(r => r.match_count > 0)
          .sort((a,b) => b.match_count - a.match_count);

        console.log('Fallback results length:', results.length);
        return results;
    } catch (error) {
        console.error('keywordRec unexpected error:', error);
        throw "sql error: " + error;
    }
}

module.exports = {
    keywordRec
}