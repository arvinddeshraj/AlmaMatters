import knexConnection from './connection';

// knexConnection.schema.renameTable('old_users', 'users').then(_ => console.log('done !!!'))

const main = async () => {
  await knexConnection.schema.createTable('h_users', table => {
    table.increments();
    table.string('name');
    table.timestamps();
  });
  await KnexConnection.schema.createTable('posts', table => {
    table.increments();
    table.number('post_id');
    table.number('user_id');
    table.timestamps();
};

main().then(_ => console.log('done!!!'))
