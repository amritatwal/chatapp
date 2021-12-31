// Import query constructor function
import { query } from "../database/index.js";

// 
export async function userAuthentication(username, password) {
  const sqlString = `SELECT * FROM users WHERE username = $1 AND password = $2`;
  const response = await query(sqlString, [username, password]);
  return response.rows[0];
}

export async function getUserInfo(username) {
  const sqlString = `SELECT * FROM users WHERE username = $1;`;
  const response = await query(sqlString, [username]);
  const user = {
    user_id: response.rows[0].user_id,
    username: response.rows[0].username,
    first_name: response.rows[0].first_name,
    last_name: response.rows[0].last_name,
  }
  console.log(user);
  return user;
}