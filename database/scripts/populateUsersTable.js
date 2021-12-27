import { query } from '../index.js';

const testUser = {
    username: "test123",
    password: "test123",
    firstName: "Amrit",
    lastName: "Atwal",
    dob: "1900-01-01",
    country: "United Kingdom"
};

const sqlString = `
INSERT INTO users (username, password, first_name, last_name, dob, country)
VALUES ($1, $2, $3, $4, $5, $6);
`;

async function populateUsersTable() {
    let response = await query(sqlString, [
        testUser.username,
        testUser.password,
        testUser.firstName,
        testUser.lastName,
        testUser.dob,
        testUser.country,
    ]);
    console.log("Test user has been inserted into the users table", response.rows);
}; 

populateUsersTable();