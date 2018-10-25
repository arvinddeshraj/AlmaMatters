// import * as knex from 'knex';

const knexConnection = require('knex')({
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'root',
    password: process.env.DBPASS,
    database: 'almamatters'
  }
});

export default knexConnection;