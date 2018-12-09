"use strict";
// import * as knex from 'knex';
exports.__esModule = true;
var knexConnection = require('knex')({
    client: 'mysql',
    pool: {
        min: 2,
        max: 10
    },
    connection: {
        // host: 'almadoluma.cawvdhszf26b.us-east-1.rds.amazonaws.com',
        // user: 'root',
        // // password: process.env.AWSPASS,
        // password: 'jesseisbaptist',
        // database: 'almamatters',
        host: 'localhost',
        user: 'root',
        password: 'loveispatientandkind',
        database: 'alma'
        // debug: true
    }
});
exports["default"] = knexConnection;
