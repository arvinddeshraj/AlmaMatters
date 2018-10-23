import knexConnection from './connection';

// knexConnection.schema.renameTable('old_users', 'users').then(_ => console.log('done !!!'))

const main = async () => {
  await knexConnection.schema.createTable('POST', table => {
    table.increments();
    table.string('post_ID',12);
    table.string('roll_no',12);
    table.text('desc');
    table.dateTime('date');
    table.string('media');
    table.timestamps();
  });

  await knexConnection.schema.createTable('POST_ACTIVITY', table => {
    table.increments();
    table.string('post_ID',12);
    table.string('roll_no',12);
    table.text('comment');
  });

  await knexConnection.schema.createTable('WORK_EXP', table => {
    table.increments();
    table.string('roll_no',12);
    table.string('company',256);
    table.string('position',100);
    table.dateTime('start_date');
    table.dateTime('stop_date');
  });

  await knexConnection.schema.createTable('INTEREST', table => {
    table.increments();
    table.string('roll_no',12);
    table.text('interest');
  });

  await knexConnection.schema.createTable('EVENTS', table => {
    table.increments();
    table.string('event_ID',12);
    table.string('roll_no',12);
    table.text('event_desc');
  });
  
};


main().then(_ => console.log('done!!!'))