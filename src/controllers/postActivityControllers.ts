import knexConnection from '../models/connection';

const likeUnlike = async (req, res) => {
  const userId = req.user['roll_no'];
  const { postId } = req.body;
  // search by postId and like or unlike based on user presence
  const user = await knexConnection('LIKES').select().where('roll_no', userId);
  if (user.length > 0) {
    try{
      const dUser = await knexConnection('LIKES').where('roll_no', userId).del();
      const count = await knexConnection('LIKES').select().where('post_id', postId).length;
      res.send({ user: dUser, count });
    } catch(e) {
      res.send(e);
    }
  } else {
    try {
      const nUser = await knexConnection('LIKES').insert({
        'roll_no': userId,
        'post_id': postId
      });
      const nCount = await knexConnection('LIKES').select().where('post_id', postId).length;
      // respond with likes count
      res.send({ message: 'you liked it...', user: nUser, count: nCount });
    } catch(e) {
      res.send(e);
    }
  }
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