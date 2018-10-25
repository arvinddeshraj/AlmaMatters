// import * as knex from 'knex';

const knexConnection = require('knex')({
  client: 'mysql',
  connection: {
    host: 'almadoluma.cawvdhszf26b.us-east-1.rds.amazonaws.com',
    user: 'root',
    password: process.env.AWSPASS,
    database: 'almamatters'
  }
});

export default knexConnection;