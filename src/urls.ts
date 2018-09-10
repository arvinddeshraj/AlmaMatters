export default new Map<string, Function>([
    ['/', async (req, res) => res.json({ message: 'app works!!!' })],
    ['/jesse', async (req, res) => res.json({ message: 'jesse also works!!!' })]
])