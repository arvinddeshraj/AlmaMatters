import apiConnection from '../models/apiConnection';

const getProfile = async (req, res) => {
  const user = await apiConnection('Student').where('Student_ID', req.user['roll_no']);
  res.json({ user: user[0] });
};

export {
  getProfile
}