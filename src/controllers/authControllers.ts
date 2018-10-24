const authIndex = async (req, res) => {
    res.json({ message: 'who the f are you?' })
};

const jesseIndex = (req, res) => {
    res.json({ message: 'jesse is the best' })
};

export { authIndex, jesseIndex };