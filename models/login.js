// Import query constructor function
import { query } from "../database/index.js";

// Get all users
export async function getUser(username, password) {
  const sqlString = `SELECT * FROM users WHERE username = $1 AND password = $2`;
  let response = await query(sqlString, [username, password]);
  console.log(response);
  return response;
}
