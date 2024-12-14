const User = require('./userModel');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.create(email, password);
    const token = jwt.sign({ id: user.id }, 'your_jwt_secret', { expiresIn: '1h' });
    res.json({ token });
};

const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findByEmail(email);
    if (user && user.password === password) {
        const token = jwt.sign({ id: user.id }, 'your_jwt_secret', { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
};

module.exports = { register, login };