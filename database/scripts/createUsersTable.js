import { query } from '../index.js';

const sqlString = `
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(16),
    password VARCHAR(16),
    first_name TEXT,
    last_name TEXT,
    dob DATE,
    country TEXT
)
`;

async function createUsersTable() {
    let response = await query(sqlString);
    console.log("Table has been created", response);
}; 

createUsersTable();