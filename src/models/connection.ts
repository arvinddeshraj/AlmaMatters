// import * as knex from 'knex';

const knexConnection = require('knex')({
  client: 'mysql',
  connection: {
    host: 'iamjesse',
    user: 'jesse',
    password: 'loveispatientandkind',
    database: 'phone_book'
  }
});

export default knexConnection;