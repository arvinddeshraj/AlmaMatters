import knexConnection from '../models/connection';

const addPost = async (req, res) => {
  const { userId, postTitle, postBody } = req.body;
  // push to database
	knexConnection('<posts_table>').insert({ userId,
																								postTitle,
																								desc: postBody,
		                                            date: new Date().toLocaleString('en-US')
																							});
  res.json({ post: { userId, postBody } });
};

const likePost = async (req, res) => {
	const { userId, postId } = req.body;
	// check whether the user already liked the post
	// if
	const user = knexConnection('<likes_table>').select('userId')
	if (user) {
		res.json({ message: 'You already liked it!!!' });
	}
	else {
		knexConnection('<posts_table_name>').insert({ postId, userId })
		const likes = await knexConnection('<likes_table>'); // update and fetch
		res.json({ likes });
	}
};

const deletePost = async (req, res) => {
  const { postId } = res.body;
  // check whether the actor is authenticated delete from database
  res.json({ message: 'Successfuly deleted...' });
};

const getPosts = async (req, res) => {
  const { userName } = req.body;
  // fetch from database
  const posts = await knexConnection.select('<posts_column_name>').from('<students_table_name>')
  // res.json({ posts }); // we get posts from DataBase response
};

const getRecentPosts = async (req, res) => {
	// loggedIn Student Id then fetch his/her posts
	const recentPosts = [
												{title: 'l', body: 'lorem'},
												{title: 'i', body: 'ipsum'}
	                    ]
	res.json({ recentPosts });
};

const getUnpublishedPosts = async (req, res) => {
	// loggedIn Student Id then fetch his/her posts
	const unpublishedPosts = [
															{title: 'lo', body: 'unpublished lorem'}
				  								 ]
	res.json({ unpublishedPosts });
};

export { addPost,
				deletePost,
				getPosts,
				getRecentPosts,
				getUnpublishedPosts
			 };