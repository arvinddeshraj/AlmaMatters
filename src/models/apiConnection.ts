const apiConnection = require('knex')({
  client: 'mysql',
  connection: {
    host: 'us-cdbr-iron-east-01.cleardb.net',
    user: 'b73de7b8cfffd5',
    password: 'ca0b7d3f',
    database: 'heroku_c9028d96deb4c64',
    debug: true
  }
});

export default apiConnection;