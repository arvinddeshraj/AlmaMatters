import knexConnection from '../models/connection';
import apiConnection from '../models/apiConnection';

const getChats = async (req, res) => {
  // roll - r, s; req.user - r, s
  const { roll, indexStart, indexEnd } = req.body;
  try {
    const details = await apiConnection('Student').where('Student_ID', roll).select('Student_First_Name', 'Student_Middle_Name', 'Student_Last_name');
    const chats = await knexConnection.raw(`SELECT * FROM CHATS WHERE (sender = ${roll} AND receiver = ${req.user['roll_no']}) OR (sender = ${req.user['roll_no']} OR receiver = ${roll}) ORDER BY time LIMIT ${indexStart}, ${indexEnd - indexStart}`); // execute the query
    res.json({
      details: details[0],
      chats: chats[0],
      user: req.user
    });
  } catch(err){
    res.send(err)
  }

};

export {
  getChats
};