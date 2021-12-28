// Import query constructor function
import { query } from '../database/index.js';

// Get all users 
export async function getUsers() {
    const sqlString = `SELECT * FROM users`;
    let response = await query(sqlString);
    return response.rows[0];
}

