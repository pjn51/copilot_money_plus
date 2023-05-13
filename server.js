"use strict";
// server.ts
// This file sets up your Express.js server and handles routing and middleware configuration.
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app = (0, express_1.default)();
var port = 3000;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get('/', function (req, res) {
    res.send('Server is running successfully!');
});
app.listen(port, function () {
    console.log('Server is listening on port ${port}');
});
