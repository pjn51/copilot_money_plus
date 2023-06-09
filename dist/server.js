// This file sets up the Express.js server and handles routing and middleware configuration.
const express = require('express');
import { connectToDatabase } from '../dist/db.js';
import { testDatabaseConnection } from '../dist/db.js';
connectToDatabase();
testDatabaseConnection();
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send('Server is running successfully!');
});
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
//# sourceMappingURL=server.js.map