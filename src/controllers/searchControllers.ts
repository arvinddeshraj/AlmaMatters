import knexConnection from '../models/connection';
import apiConnection from '../models/apiConnection';

const searchByBatch = async (req, res) => {
	const { yr } = req.body;
	const regex = `^${yr}`;
	// const students = await apiConnection('Student').where(apiConnection.knex.raw(`?? REGEXP ?`, ['Student_Registered_Year', regex]))
	// console.log(students	)
	const students = await apiConnection('Student').select()
													.where('Student_Registered_Year' , `REGEXP ^${yr}`);
	console.log(yr, students);
	res.send({ students });
};

const getAllByName = async (req, res) => {
	const { name } = req.body;
	const students = await apiConnection('Student').select().where(function() {
										this.where('Student_First_Name', `REGEXP '${name}'`)
											  .orWhere('Student_Middle_Name', `REGEXP '${name}'`)
												.orWhere('Student_Last_name', `REGEXP '${name}'`)
									});
	res.send({ students });
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
	getAllByName,
	searchByName,
	searchByCompany,
	searchByInterest
};