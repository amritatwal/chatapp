/* 
- Install the dotenv module which allows us to use process.env 
- process is a Node.js global object, and env is the property we use to access variables we store in the user environment
- In this file, we will create an object that will be exported. Within the db object we hook our database credential variable to the user environment
- These variables are accessed and loaded at/during runtime through the dotenv package
- We prepend -r dotenv/config to our scripts/files that require these .env variables 
*/

export const db = {
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    user_name: process.env.DB_USER_NAME,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
}; 