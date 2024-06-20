import db from '../db.js';
import dbEmitter from '../db-emitter.js';

dbEmitter.on('history', (id, type, value) => {
  db.query(
    'INSERT INTO "users_history" (userId, event_type, event_data) VALUES($1, $2, $3)',
    [id, type, value]
  );
});

const getHistory = async (id, limit, offset) => {
  const { rows } = await db.query(
    'SELECT * FROM users_history WHERE userId = $1 LIMIT $2 OFFSET $3',
    [id, limit, offset]
  );
  return rows;
};

export default {
  getHistory,
};
