import knexConnection from '../models/connection';
import apiConnection from '../models/apiConnection';

const searchByBatch = async (req, res) => {
	const { yr } = req.body;
	const students = await apiConnection('Student').select().where('Student_Registered_Year' , 'REGEXP', `^${yr}`);
	console.log({ students });
};

// Add  a new event to the MySQL db
const searchByName = async (req, res) => {
	const { name  } = req.body;
	let name_details = name.split(" ")
  const addPostResult = await knexConnection.select().table('STUDENTS').where({'Student_First_Name': name_details[0],'Student_Last_name': name_details[2]});
	// Media will contain link to the storage where they are hosted. Yet to be implemented
	res.send({ event: { name }, message: 'Student found.' });
};

const searchByCompany = async (req, res) => {
	const { comp_name  } = req.body;
  	const addPostResult = await knexConnection.select().table('STUDENTS').where('Student_First_Name', comp_name);
	// Media will contain link to the storage where they are hosted. Yet to be implemented
	res.send({ event: { comp_name }, message: 'Company found.' });
};

const searchByInterest = async (req, res) => {
	const { int_name  } = req.body;
  	const addPostResult = await knexConnection.select().table('INTERESTS').where('interest', int_name);
	// Media will contain link to the storage where they are hosted. Yet to be implemented
	res.send({ event: { int_name }, message: 'Interest found.' });
};

export {
	searchByBatch,
	searchByName,
	searchByCompany,
	searchByInterest
};