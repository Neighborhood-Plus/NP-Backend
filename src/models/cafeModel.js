import pool from '../config/db.js';

// 모든 카페 조회
export const getCafes = async () => {
  const [rows] = await pool.query('SELECT * FROM cafe');
  return rows;
};

// 특정 카페 조회
export const getCafeById = async (id) => {
  const [rows] = await pool.query('SELECT * FROM cafe WHERE id = ?', [id]);
  return rows[0];
};