// server.ts
// This file sets up your Express.js server and handles routing and middleware configuration.

import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res) => {
	res.send('Server is running successfully!');
});

app.listen(port, () => {
	console.log('Server is listening on port ${port}');
});