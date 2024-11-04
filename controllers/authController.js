const User = require('../models/User');
const md5 = require('md5');

const register = async (req, res) => {
    let { email, username, password, confirm_password } = req.body;

    const existEmail = await User.findOne({ email });
    const existUsername = await User.findOne({ username });

    if (existEmail) {
        return res.status(500).send('Email has already existed');
    }
    if (existUsername) {
        return res.status(500).send('Username has already existed')
    }

    if (password !== confirm_password) {
        return res.status(500).send('Invalid password confirmation');
    }

    password = md5(password);

    const newUser = new User({ email, username, password });
    try {
        await newUser.save();
        return res.redirect('/login');
    } catch (error) {
        return res.status(500).send('Error registering user');
    }
}

const login = async (req, res) => {
    req.body.password = md5(req.body.password);

    const user = await User.findOne({ username: req.body.username, password: req.body.password });
    if (!user) {
        return res.status(401).send('Invalid username or password');
    }

    req.session.user = user;
    return res.redirect('/homepage');
}

module.exports = {
    register,
    login,
}
