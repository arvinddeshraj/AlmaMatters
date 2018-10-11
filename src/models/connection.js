"use strict";
// import * as knex from 'knex';
exports.__esModule = true;
var knexConnection = require('knex')({
    client: 'mysql',
    connection: {
        host: 'iamjesse',
        user: 'jesse',
        password: 'loveispatientandkind',
        database: 'phone_book'
    }
});
exports["default"] = knexConnection;
