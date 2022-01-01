// Import query constructor function
import { query } from "../database/index.js";

// 
export async function addUser(user) {
    const sqlString = `
    INSERT INTO users (username, password, first_name, last_name, dob, country)
    VALUES ($1, $2, $3, $4, $5, $6);
    `;    
    const response = await query(sqlString, [
        user.username,
        user.password,
        user.first_name,
        user.last_name,
        user.dob,
        user.country,
        ]);
  return response;
}