import knexConnection from '../models/connection';

const likeUnlike = async (req, res) => {
  const userId = req.user['roll_no'];
  const { postId } = req.body;
  // search by postId and like or unlike based on user presence
  // respond with likes count
  res.send({ message: 'you liked it...' });
};

const commentPost = async (req, res) => {
  const userId = req.user['roll_no'];
  const { postId, comment } = req.body;
  // update the table
  res.send({ message: 'comment added...' });
};

export {
  likeUnlike,
  commentPost
};