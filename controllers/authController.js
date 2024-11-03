const User = require('../models/User');
const md5 = require('md5');

const register = async (req, res) => {
    let { email, password, confirm_password } = req.body;
    // Kiểm tra email đã tồn tại
    const existEmail = await User.findOne({ email });
    if (existEmail) {
        return res.status(500).send('Email has already existed');
    }

    // Kiểm tra password và confirm_password
    if (password !== confirm_password) {
        return res.status(500).send('Invalid password confirmation');
    }

    password = md5(password);

    // Tạo người dùng mới
    const newUser = new User({ email, password });
    try {
        await newUser.save();
        return res.redirect('/login'); // Chuyển hướng đến trang đăng nhập
    } catch (error) {
        return res.status(500).send('Error registering user');
    }
}

const login = async (req, res) => {
    // Mã hóa password trước khi tìm kiếm
    req.body.password = md5(req.body.password);

    // Tìm người dùng với email và mật khẩu đã mã hóa
    const user = await User.findOne({ email: req.body.email, password: req.body.password });
    if (!user) {
        return res.status(401).send('Invalid email or password');
    }

    // Đăng nhập thành công, chuyển hướng tới dashboard
    return res.redirect('/homepage');
}

module.exports = {
    register,
    login,
}
