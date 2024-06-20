import db from '../db.js';
import dbEmitter from '../db-emitter.js';

const create = async (data) => {
  const { rows } = await db.query(
    'INSERT INTO "public"."users" (firstName, lastName, age) VALUES($1, $2, $3) RETURNING *',
    [data.firstName, data.lastName, data.age]
  );
  const user = rows[0];
  if (!user) return null;
  dbEmitter.emit('history', user.id, 'created', data);
  return user;
};

const update = async (id, data) => {
  const entries = Object.entries(data);
  const columns = entries.map((e) => e[0]).join();
  const values = entries.map((e) => e[1]);
  const template = ['$2', '$3', '$4'].slice(0, entries.length).join();
  const rows = await db.query(
    'UPDATE users SET (' +
      columns +
      ') = (' +
      template +
      ') WHERE id = $1 RETURNING *',
    [id, ...values]
  );
  console.log(rows);
  const user = rows.rows[0];
  if (!user) return null;
  dbEmitter.emit('history', user.id, 'updated', data);
  return user;
};

const remove = (id) => {
  return db.query('DELETE FROM users WHERE id = $1', [id]);
};
const getAll = () => {
  return db.query('SELECT * FROM users', [id]);
};

export default {
  create,
  update,
  remove,
  getAll,
};
