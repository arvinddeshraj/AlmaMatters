import knexConnection from './connection';

// knexConnection.schema.renameTable('old_users', 'users').then(_ => console.log('done !!!'))

const main = async () => {
  await knexConnection.schema.createTable('h_users', table => {
    table.increments();
    table.string('name');
    table.timestamps();
  });
};

main().then(_ => console.log('done!!!'))