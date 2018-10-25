import knexConnection from '../models/connection';

// Add  a new event to the MySQL db
const searchbyName = async (req, res) => {
	const { name  } = req.body;
	let name_details = name.split(" ")
  	const addPostResult = await knexConnection.select().table('STUDENTS').where({'Student_First_Name': name_details[0],'Student_Last_Name': name_details[2]});
	// Media will contain link to the storage where they are hosted. Yet to be implemented
	res.send({ event: { name }, message: 'Student found.' });
};

const searchbyCompany = async (req, res) => {
	const { comp_name  } = req.body;
  	const addPostResult = await knexConnection.select().table('STUDENTS').where('Student_First_Name', comp_name);
	// Media will contain link to the storage where they are hosted. Yet to be implemented
	res.send({ event: { comp_name }, message: 'Company found.' });
};

const searchbyInterest = async (req, res) => {
	const { int_name  } = req.body;
  	const addPostResult = await knexConnection.select().table('INTERESTS').where('interest', int_name);
	// Media will contain link to the storage where they are hosted. Yet to be implemented
	res.send({ event: { int_name }, message: 'Interest found.' });
};
