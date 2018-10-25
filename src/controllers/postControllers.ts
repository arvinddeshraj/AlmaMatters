import knexConnection from '../models/connection';

// add Post to MySQL db
const addPost = async (req, res) => {
	const { description  } = req.body;
	// attempting to read roll number	from jwt
	const userId = req.user['roll_no'];
	const now = new Date();
	const addPostResult = await knexConnection('POST').insert({ roll_no:userId, desc:description, date:now, created_at:now });
	// Media will contain link to the storage where they are hosted. Yet to be implemented
	res.send({ post: { userId, description }, message: 'Post succesfully added.' });
};

// delete Post from MySQL db
const deletePost = async (req, res) => {
  const { postId } = req.body;
	const deletePostResult = await knexConnection('POST').where('id', postId).del();
	console.log(deletePostResult);
	if (deletePostResult != 0) {
		res.send({ message: 'Successfuly deleted Post.' });
	} else {
		res.send({error: 'Unable to delete the Post.'})
	}
};

// retrieve Posts from DB for primary feed.
const getPosts = async (req, res) => {
	const {initialPostNumber, finalPostNumber} = req.body;
	let lim = parseInt(finalPostNumber) - parseInt(initialPostNumber);
	console.log('initial',initialPostNumber,'finalPostNumber',finalPostNumber)
	const fetchedPosts = await knexConnection.select().table('POST').orderBy('date', 'desc').limit(lim).offset(parseInt(initialPostNumber));
	res.send(fetchedPosts);
};

const getUserPosts = async (req, res) => {
	const {roll_number} = req.body;
	const userPosts = await knexConnection.select().table('POST').where('roll_no', roll_number).orderBy('date','desc');
	res.send(userPosts)
}

export { addPost,
		 deletePost,
		 getPosts,
		 getUserPosts
};
