import knexConnection from '../models/connection';

// Add  a new event to the MySQL db
const createEvent = async (req, res) => {
	const userId = req.user['roll_no'];
	const { event_tit, st_date, end_date, description  } = req.body;
  	const addPostResult = await knexConnection('EVENTS').insert({ roll_no: userId,event_title: event_tit, start_date: st_date, stop_date: end_date, desc: description });
	// Media will contain link to the storage where they are hosted. Yet to be implemented
	res.send({ event: { userId, event_tit }, message: 'Event succesfully created.' });
};

// delete Event from MySQL db
const deleteEvent = async (req, res) => {
	const { eventId } = req.body;
	const deleteEventResult = await knexConnection('EVENTS').where('event_ID', eventId).del();
	console.log(deleteEventResult);
	if (deleteEventResult != 0) {
		res.send({ message: 'Successfuly deleted Event.' });
	} else {
		res.send({error: 'Unable to delete the Event.'})
	}
};

// retrieve Events from DB for primary feed.
const getEvents = async (req, res) => {
	const {initialEventNumber, finalEventNumber} = req.body;
	let lim = parseInt(finalEventNumber) - parseInt(initialEventNumber);
	console.log('initial',initialEventNumber,'finalPostNumber',finalEventNumber)
	const fetchedEvents = await knexConnection.select().table('EVENTS').orderBy('start_date', 'event_desc').limit(lim).offset(parseInt(initialEventNumber));
	res.send(fetchedEvents);
};

export {
	createEvent,
	deleteEvent,
	getEvents
};