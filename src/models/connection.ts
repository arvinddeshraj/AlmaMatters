// import * as knex from 'knex';

const knexConnection = require('knex')({
  client: 'mysql',
  pool: {
    min: 2,
    max: 10
  },
  connection: {
    host: 'almadoluma.cawvdhszf26b.us-east-1.rds.amazonaws.com',
    user: 'root',
    password: process.env.AWSPASS,
    database: 'almamatters'
  }
});

export default knexConnection;