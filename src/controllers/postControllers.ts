import knexConnection from '../models/connection';

const addPost = async (req, res) => {
  const { userId, postBody } = req.body;
  // push to database
  res.json({ post: { userId, postBody } });
};

const deletePost = async (req, res) => {
  const { postId } = res.body;
  // check whether the actor is authenticated delete from database
  res.json({ message: 'Successfuly deleted...' });
};

const getPosts = async (req, res) => {
  const { userName } = req.body;
  // fetch from database
  // res.json({ posts }); // we get posts from DataBase response
};

export { addPost, deletePost, getPosts };