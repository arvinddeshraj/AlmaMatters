"use strict";
// import * as knex from 'knex';
exports.__esModule = true;
var knexConnection = require('knex')({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password: process.env.DBPASS,
        database: 'almamatters'
    }
});
exports["default"] = knexConnection;
