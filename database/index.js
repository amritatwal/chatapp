import { db } from '../config/cred.js';
import pg from "pg";
/*
In this file, we are going to 
*/

const pool = new pg.Pool({
    host: db.host,
    database: db.database,
    user: db.user,
    port: db.port,
    password: db.password,
    ssl: false
});

// Query constructor function 

export function query(text, params) {
    // Exposing pool.query method so we can use it elsewhere
    // Ditch the callbacks in order to use async/await instead
    return pool.query(text, params);
}