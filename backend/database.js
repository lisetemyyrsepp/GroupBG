//The easiest and by far most common way to use node-postgres is through a connection pool.
//The PostgreSQL server can only handle a limited number of clients at a time, and 
// it can only process one query at a time on a single connected client in a first-in first-out manner. 
//If your app is using only a single connected client all queries among all simultaneous requests will be pipelined and executed serially.
// The client pool allows you to have a reusable pool of clients you can check out, use, and return.


//node-postgres also has built-in support for promises throughout all of its async APIs.
//Promises allow us to use async/await in node v8.0 and above.

const Pool = require('pg').Pool;

// this code will work and a table will be created if you have already created the "testWad" database.
const pool = new Pool({
    user: "postgres",
    password: "sql", // Enter your password here
    database: "WAD", //Try to use the same name for your database
    host: "localhost",
    port: "5432"
});


const execute = async(query) => {
    try {
        await pool.connect(); // gets connection
        await pool.query(query); // sends queries
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    }
};


const createTblQueryPosts = `
    CREATE TABLE IF NOT EXISTS "posttable" (
	    "id" SERIAL PRIMARY KEY,         
	    "title" VARCHAR(200) NOT NULL,
	    "body" VARCHAR(200) NOT NULL,
        "urllink" VARCHAR(200),
        "date" DATE DEFAULT CURRENT_DATE
    );`;

const createTblQueryUsers = `
    CREATE TABLE IF NOT EXISTS "users" (
        id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
        email VARCHAR(200) NOT NULL UNIQUE,
        password VARCHAR(200) NOT NULL 
    );`;

execute(createTblQueryPosts).then(result => {
    if (result) {
        console.log('Attempted to create table: posttable');
    }
});

execute(createTblQueryUsers).then(result => {
    if (result) {
        console.log('Attempted to create table: users');
    }
})

module.exports = pool;