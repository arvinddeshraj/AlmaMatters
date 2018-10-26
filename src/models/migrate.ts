import knexConnection from './connection';

// knexConnection.schema.renameTable('old_users', 'users').then(_ => console.log('done !!!'))

const main = async () => {
  await knexConnection.schema.createTable('POST', table => {
    table.increments();
    table.string('post_ID', 12);
    table.string('roll_no', 12);
    table.string('first_name', 15);
    table.string('middle_name', 15);
    table.string('last_name', 15);
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
    table.increments('event_ID');
    table.string('roll_no',12);
    table.string('event_title',100);
    table.dateTime('start_date');
    table.dateTime('end_date');
    table.text('event_desc');
    table.string('media',256);
    table.boolean('archived');
    table.string('first_name',15);
    table.string('middle_name',15);
    table.string('last_name',15);
  });
  
};


main().then(_ => console.log('done!!!'))