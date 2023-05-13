// db.ts
// This file should contain functions to connect to the MySQL database, 
//  execute queries, and retrieve data.
import mysql from 'mysql';
const dotenv = require('dotenv');

dotenv.config();
const connection = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: 'budget_database'
});

export const connectToDatabase = () => {
    connection.connect((err) => {
        if (err) {
            console.error('Error connecting to the database:', err);
            return;
        }
        console.log('Connected to the database');
    });
};
export const executeQuery = (query) => {
    return new Promise((resolve, reject) => {
        connection.query(query, (err, results) => {
            if (err) {
                console.error('Error executing query:', err);
                reject(err);
                return;
            }
            resolve(results);
        });
    });
};
export { connection };
// testing connection
export const testDatabaseConnection = async () => {
    try {
        await connection.connect();
        console.log('Connected to the database');
        // Execute a sample query
        const query = 'SELECT 1 + 1 AS result';
        const results = await executeQuery(query);
        console.log('Sample query result:', results[0].result);
        connection.end();
        console.log('Disconnected from the database');
    }
    catch (error) {
        console.error('Error connecting to the database:', error);
    }
};
//# sourceMappingURL=db.js.map