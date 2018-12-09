import knexConnection from '../models/connection';

const defaultIndex = async (req, res) => {
    res.json({ message: 'render front-end here...' })
};

const runQuery = async (req, res) => {
    const docs = await knexConnection.raw(req.body.query);
    res.json({ docs })
};

export { defaultIndex, runQuery };