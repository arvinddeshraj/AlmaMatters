import knexConnection from '../models/connection';

const defaultIndex = async (req, res) => {
    res.json({ message: 'render front-end here...' })
};

const runQuery = async (req, res) => {
    // await knexConnection.raw(`use almamatters`);
    try{
        const docs = await knexConnection.raw(req.body.query);
        res.json({ docs })
    } catch(err) {
        res.json({ err })
    }
    console.log(req.body.query);
};

export { defaultIndex, runQuery };