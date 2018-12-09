import knexConnection from '../models/connection';
import apiConnection from '../models/apiConnection';

const getAll = async (req, res) => {
  const sDate = req.body;
  console.log(sDate);
  res.json({ sDate });
};

export {
  getAll
};