import {sign as signToken, verify as verifyToken } from 'jsonwebtoken';
import apiConnection from '../models/apiConnection';

const authIndex = async (req, res) => {
    res.json({ message: 'who are you?' })
};

const jesseIndex = (req, res) => {
    res.json({ message: 'jesse is the best' })
};

const getToken = async (req, res) => {
    // const token = req.body.token;
    // // console.log(req.body.id);
    // const user = await apiConnection('student').where('Id', req.body.id);
    // // const user1 = await apiConnection('student').where('Student_ID', '20160020159');    
    // console.log(user.length);
    // if(user.length == 0) { res.send({error: 'UserId not present'}); } else {
    //     res.send({ user })
    //     console.log('success');
    // }
    // // res.send({ user });
    let decoded;
    try {
        decoded = verifyToken(req.body.token, '4386045b9659c93060ce4b92376a9120290f57beb1217a1dcd2a88e0d96ef158684c1345846ee7ae59117790f407591711b5f5723682d954029f2652952e72d4');
        console.log(decoded.id)
        const user = await apiConnection('student').where('Id', decoded.id);
        // TODO find row by id in token and return the scope
        // const student = await queryDb(`select * from student where Id=${decoded.id}`)

        // TODO create token and send in response
        // console.log(user)
        console.log({roll_no: user[0]['Student_ID'], id: decoded.id})
        const token = signToken({roll_no: user[0]['Student_ID'], id: decoded.id}, 'secretkey');
        console.log(token)
        res.send({token, user});
    } catch(e) {
        res.send(e)
    }
}

const logout = async (req, res) => {
    delete req.user;
    !req.user && res.send({ message: 'Succesfully Logged Out' });
};

export { authIndex, jesseIndex, getToken, logout };