import knexConnection from '../models/connection';
import apiConnection from '../models/apiConnection'

// Add  a new event to the MySQL db
const createEvent = async (req, res) => {
	const userId = req.user['roll_no'];
	const { event_tit, st_date, end_date, description  } = req.body;
	const user = await apiConnection('Student').where('Student_ID', userId).select('Student_First_Name', 'Student_Middle_Name', 'Student_Last_name');
  	const addPostResult = await knexConnection('EVENTS').insert({ first_name:user[0]['Student_First_Name'],middle_name:user[0]['Student_Middle_Name'],last_name:user[0]['Student_Last_name'],roll_no: userId,event_title: event_tit, start_date: st_date, end_date: end_date, event_desc: description });
	// Media will contain link to the storage where they are hosted. Yet to be implemented
	res.send({ event: { userId, event_tit, st_date , end_date, description }, message: 'Event succesfully created.',user: user[0] });
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
	const {initialEventNumber, finalEventNumber} = req.query;
	console.log(initialEventNumber, finalEventNumber)
	let lim = parseInt(finalEventNumber) - parseInt(initialEventNumber);
	console.log('initial',initialEventNumber,'finalPostNumber',finalEventNumber)
	const fetchedEvents = await knexConnection.select().table('EVENTS').orderBy('start_date', 'event_desc').limit(lim).offset(parseInt(initialEventNumber));
	res.send(fetchedEvents);
};

const getAuthenticatedUserEvents = async (req, res) => {
	const userId = req.user['roll_no'];
	try {
	const events = await knexConnection('EVENTS').select().where('roll_no', userId);
	res.send({ events });
	} catch (error) {
		res.send({ error })
	}
};

export {
	createEvent,
	deleteEvent,
	getEvents,
	getAuthenticatedUserEvents
};