import {sign as signToken, verify as verifyToken } from 'jsonwebtoken';
const authIndex = async (req, res) => {
    res.json({ message: 'who the f are you?' })
};

const jesseIndex = (req, res) => {
    res.json({ message: 'jesse is the best' })
};

const getDetails = async (req, res) => {
    const token = req.body.token;
    // const user = await User.findById(req.body.id);
    // if (user == null) res.send({error: 'UserId not present'});
    let decoded;
    try {
        decoded = verifyToken(req.body.token, req.body.secret);

        // TODO find row by id in token and return the scope
        // const student = await queryDb(`select * from student where Id=${decoded.id}`)

        // TODO create token and send in response
        res.send({});
    } catch(e) {
        res.send(e)
    }
}

export { authIndex, jesseIndex, getDetails };